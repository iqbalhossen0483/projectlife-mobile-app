import { useState } from "react";
import { StoreFn, User } from "./store-type";

const Store: StoreFn = () => {
  const [user, setUser] = useState<User | null>(null);

  return {
    user,
    setUser,
  };
};
export default Store;
