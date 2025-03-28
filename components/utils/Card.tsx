import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { View, ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  children: React.ReactNode;
};

const Card = ({ children, style, ...otherProps }: ThemedViewProps) => {
  const theme = useColorScheme() ?? "light";

  const shadowStyle = {
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  };
  return (
    <View
      style={[
        {
          backgroundColor: Colors[theme].cardBackground,
          padding: 10,
          borderRadius: 10,
          alignItems: "center",
          ...(theme === "light" && shadowStyle),
        },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </View>
  );
};

export default Card;
