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
  const [userLoading, setUserLoading] = useState(false);
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
        setUserLoading(true);
        const { data } = await http.get("/auth/me");
        setUser(data);
        // navigation.navigate(routes.profile_layout);
      } catch (error) {
        console.log(error);
        navigation.navigate(routes.login);
      } finally {
        setUserLoading(false);
      }
    })();
  }, []);

  return {
    user,
    setUser,
    toastMessage,
    setToastMessage,
    setUserLoading,
    userLoading,
  };
};
export default Store;
