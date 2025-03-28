import Store from "@/store/store";
import { Store as StoreType } from "@/store/store-type";
import React, { createContext } from "react";

export const Contex = createContext<StoreType | null>(null);

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const store = Store();
  return <Contex.Provider value={store}>{children}</Contex.Provider>;
};

export default StoreProvider;
