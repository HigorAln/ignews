import { useSession, signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import {createContext, ReactNode} from 'react'
import { api } from '../services/api';
import { getStripeJs } from '../services/stripe-js';

type SubscribeProps = {
  handleSubscribe: ()=> Promise<void>;
};

type SubscribeProvider = {
  children: ReactNode;
}


export const ContextSubscribe = createContext({} as SubscribeProps)

export const ContextSubscribeProvider = ({children}: SubscribeProvider)=>{
  const [session] = useSession();
  const router = useRouter()

  async function handleSubscribe(){
    console.log(`ta entrando?`)
    if(!session){
      signIn('github')
      return;
    }

    if(session.activeSubscription){
      router.push('/posts')
      return
    }
    
    try{
      const response = await api.post('/subscribe')

      const { sessionId } = response.data;

      const stipe = await getStripeJs()

      await stipe.redirectToCheckout({ sessionId })

    }catch(err){

      alert(err.message)
    }
  }

  return(
    <ContextSubscribe.Provider value={{handleSubscribe}}>
      {children}
    </ContextSubscribe.Provider>
  )
}