import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch,Rootstate} from "./store";

export  const useAppDispatch = () => useDispatch<AppDispatch>();

export const  useAppSelector : TypedUseSelectorHook<Rootstate> = useSelector; 
