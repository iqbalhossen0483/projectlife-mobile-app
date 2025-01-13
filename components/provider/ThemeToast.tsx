import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

export const ThemedToast = () => {
  const backgroundColor = useThemeColor("background");
  const textColor = useThemeColor("text");
  const successBorder = useThemeColor("primary");
  const errorBorder = useThemeColor("error");

  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: successBorder,
          backgroundColor,
          borderColor: successBorder,
          borderWidth: 1,
        }}
        text1Style={{
          color: textColor,
          fontSize: 16,
          fontWeight: "bold",
        }}
        text2Style={{
          color: textColor,
          fontSize: 14,
        }}
      />
    ),
    error: (props: any) => (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: errorBorder,
          backgroundColor,
          borderColor: errorBorder,
          borderWidth: 1,
        }}
        text1Style={{
          color: textColor,
          fontSize: 16,
          fontWeight: "bold",
        }}
        text2Style={{
          color: textColor,
          fontSize: 14,
        }}
      />
    ),
  };

  return <Toast config={toastConfig} position='bottom' />;
};
