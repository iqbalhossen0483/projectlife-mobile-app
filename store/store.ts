import { routes } from "@/app/Routes/routes";
import http from "@/config/http";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StoreFn, ToastMessage, User } from "./store-type";

const Store: StoreFn = () => {
  const [user, setUser] = useState<User | null>(null);
  const [toastMessage, setToastMessage] = useState<ToastMessage>({
    title: null,
    description: null,
    onFinished: undefined,
  });
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await http.get("/auth/me");
        setUser(data);
        navigation.navigate(routes.home);
      } catch (error) {
        console.log(error);
        navigation.navigate(routes.login);
      }
    })();
  }, []);

  return {
    user,
    setUser,
    toastMessage,
    setToastMessage,
  };
};
export default Store;
