import styled from './styles.module.scss'
import useSubscribe from '../../hooks/useSubscribe';


interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({priceId}: SubscribeButtonProps){
  const {handleSubscribe} = useSubscribe()
 
  return(
    <button
      type='button'
      className={styled.subscribeButton}
      onClick={()=>handleSubscribe()}
    >
      Subscribe now
    </button>
  )
}