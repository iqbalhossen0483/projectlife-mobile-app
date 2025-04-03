import { useThemeColor } from "@/hooks/useThemeColor";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Pressable, View } from "react-native";

interface Props {
  checked: boolean;
  onChange: (value: boolean) => void;
  children: React.ReactNode;
}

const CheckBox = ({ checked, onChange, children }: Props) => {
  const successColor = useThemeColor("success");
  const borderColor = useThemeColor("border");

  return (
    <Pressable
      style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
      onPress={() => onChange(!checked)}
    >
      <View
        style={{
          borderWidth: 1.5,
          borderColor: checked ? successColor : borderColor,
          borderRadius: 3,
          height: 22,
          width: 22,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {checked && (
          <FontAwesome6 name='check' size={18} color={successColor} />
        )}
      </View>
      {children}
    </Pressable>
  );
};

export default CheckBox;
