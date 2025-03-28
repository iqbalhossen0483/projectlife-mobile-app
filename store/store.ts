import { useState } from "react";
import { StoreFn, ToastMessage, User } from "./store-type";

const Store: StoreFn = () => {
  const [user, setUser] = useState<User | null>(null);
  const [toastMessage, setToastMessage] = useState<ToastMessage>({
    title: null,
    description: null,
    onFinished: undefined,
  });

  return {
    user,
    setUser,
    toastMessage,
    setToastMessage,
  };
};
export default Store;
