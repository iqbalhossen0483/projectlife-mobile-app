import { routes } from "@/app/Routes/routes";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { TouchableHighlight } from "react-native";

type Props = {
  children: React.ReactNode;
  href: keyof typeof routes;
  params?: Object;
  onPress?: () => void;
};

const Link = ({ href, children, params, onPress }: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const primaryLight = useThemeColor("primary-light");

  return (
    <TouchableHighlight
      underlayColor={primaryLight}
      onPress={() => {
        if (onPress) onPress();
        navigation.navigate(href, params);
      }}
    >
      {children}
    </TouchableHighlight>
  );
};

export default Link;
