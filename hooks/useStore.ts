import { Contex } from "@/providers/StoreProvider";
import { useContext } from "react";

const useStore = () => {
  return useContext(Contex);
};

export default useStore;
