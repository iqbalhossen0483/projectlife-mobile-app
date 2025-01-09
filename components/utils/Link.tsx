import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";

interface LinkProps extends PressableProps {
  children: React.ReactNode;
  href: string;
  style?: StyleProp<ViewStyle>; // Optional style prop for customization
}

const Link = ({ children, href, style, ...rest }: LinkProps) => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <Pressable
      {...rest}
      style={style}
      onPress={() => navigation.navigate(href)}
    >
      {children}
    </Pressable>
  );
};

export default Link;
