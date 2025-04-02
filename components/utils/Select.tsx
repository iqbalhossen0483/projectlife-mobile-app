import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Pressable, View } from "react-native";
import { Typography } from "./Typography";

interface Props {
  options: string[];
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  direction?: "column" | "row";
}

const Select = ({ options, value, onChange, direction = "row" }: Props) => {
  const placeHolderColor = useThemeColor("placeholder");
  const primaryColor = useThemeColor("primary");

  return (
    <View
      style={{
        flexDirection: direction,
        alignItems: direction === "row" ? "center" : "flex-start",
        gap: direction === "row" ? 30 : 10,
      }}
    >
      {options.map((item) => (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          onPress={() => onChange(item)}
          key={item}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: value === item ? primaryColor : placeHolderColor,
              borderRadius: 100,
              padding: 2,
            }}
          >
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: value === item ? primaryColor : undefined,
                borderRadius: 50,
              }}
            />
          </View>
          <Typography>{item}</Typography>
        </Pressable>
      ))}
    </View>
  );
};

export default Select;
