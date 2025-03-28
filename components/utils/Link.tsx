import { routes } from "@/app/Routes/routes";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { Pressable, PressableProps } from "react-native";

type Props = {
  children: React.ReactNode;
  href: keyof typeof routes;
} & PressableProps;

const Link = ({ href, children, ...others }: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <Pressable onPress={() => navigation.navigate(href)} {...others}>
      {children}
    </Pressable>
  );
};

export default Link;
