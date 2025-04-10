import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import {
  Animated,
  Platform,
  Pressable,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { routes } from "../../app/Routes/routes";

interface RippleButtonProps {
  children: React.ReactNode;
  style?: ViewStyle;
  href?: keyof typeof routes;
  onPress?: () => void;
  variant?: "containd" | "outline" | "text";
  ripple?: boolean;
  disabled?: boolean;
  bgColor?: keyof typeof Colors.light;
}

type Button = React.FC<RippleButtonProps>;

const RippleButton: Button = ({
  children,
  href,
  style,
  onPress,
  variant,
  ripple = true,
  disabled,
  bgColor = "primary",
}) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const disabledColor = useThemeColor("disabled");
  const backgroundgColor = useThemeColor(bgColor);
  const scaleValue = new Animated.Value(0);
  const backgroundColor = disabled ? disabledColor : backgroundgColor;

  const lighterColor = lightenColor(backgroundgColor, 20);

  const handlePressIn = () => {
    if (Platform.OS === "ios") {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  const handlePressOut = () => {
    if (Platform.OS === "ios") {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  const handlePress = () => {
    if (href) {
      navigation.navigate(href);
    } else if (onPress) {
      onPress();
    }
  };

  const rippleConfig = ripple
    ? {
        onPressIn: handlePressIn,
        onPressOut: handlePressOut,
        android_ripple: { color: lighterColor, radius: 200 },
      }
    : {};

  return (
    <Pressable
      {...rippleConfig}
      onPress={handlePress}
      disabled={disabled}
      style={[
        styles.button,
        variant === "outline"
          ? { borderColor: backgroundColor, borderWidth: 1 }
          : variant === "text"
          ? {}
          : { backgroundColor },
        style,
      ]}
    >
      {Platform.OS === "ios" && (
        <Animated.View
          style={[
            styles.ripple,
            {
              backgroundColor: lighterColor,
              transform: [{ scale: scaleValue }],
            },
            style,
          ]}
        />
      )}
      {children}
    </Pressable>
  );
};

function lightenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = (num >> 16) + Math.round(((255 - (num >> 16)) * percent) / 100);
  const g =
    ((num >> 8) & 0x00ff) +
    Math.round(((255 - ((num >> 8) & 0x00ff)) * percent) / 100);
  const b =
    (num & 0x0000ff) + Math.round(((255 - (num & 0x0000ff)) * percent) / 100);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 8,
  },
  ripple: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    opacity: 0.5,
    zIndex: 0,
  },
});

export default RippleButton;
