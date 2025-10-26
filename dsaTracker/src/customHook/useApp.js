import AppContext from "../Context/AppContext";
import { useContext } from "react";

export default function useApp() {
  const context = useContext(AppContext);

  if(!context){
    throw new Error('useApp must be used within an AppContextProvider')
  }

  return context;

}