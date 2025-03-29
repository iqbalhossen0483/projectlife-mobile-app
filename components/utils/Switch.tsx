import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Pressable } from "react-native";
import { Box } from "./Box";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Switch = ({ open, setOpen }: Props) => {
  const backgroundColor = useThemeColor("background");
  const color = !open ? "disabled" : "primary";
  const borderColor = useThemeColor(color);

  return (
    <Pressable
      onPress={() => setOpen((prev) => !prev)}
      style={{
        position: "relative",
        borderColor,
        borderWidth: 1,
        width: 35,
        height: 17,
        borderRadius: 10,
        backgroundColor,
      }}
    >
      <Box
        style={{
          backgroundColor: borderColor,
          width: 18,
          height: 19,
          borderRadius: 200,
          position: "absolute",
          top: -2,
          ...(open ? { right: -1 } : { left: -1 }),
        }}
      />
    </Pressable>
  );
};

export default Switch;
