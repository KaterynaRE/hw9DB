import { useContext } from "react";
import { CrocoContext } from "../contexts/CrocoContext";

export const useCrocos = () => {
  const context = useContext(CrocoContext);
  if (!context) throw Error("You should provide CrocoContext");
  return context;
};
