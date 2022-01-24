import { useContext } from "react";
import { ContextSubscribe } from '../context/ContextSubscribe';


const useSubscribe = ()=> useContext(ContextSubscribe)

export default useSubscribe;