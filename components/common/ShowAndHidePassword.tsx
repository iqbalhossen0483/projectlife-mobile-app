import { useThemeColor } from "@/hooks/useThemeColor";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";

interface Props {
  showSecure: boolean;
  setShowSecure: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowAndHidePassword = ({ showSecure, setShowSecure }: Props) => {
  const placeholderColor = useThemeColor("placeholder");

  return (
    <Pressable
      onPress={() => setShowSecure((prev) => !prev)}
      style={{ position: "absolute", right: 10, top: 12 }}
    >
      {!showSecure ? (
        <FontAwesome6
          style={{ color: placeholderColor }}
          name='eye'
          size={20}
        />
      ) : (
        <FontAwesome6
          name='eye-slash'
          size={19}
          style={{ color: placeholderColor }}
        />
      )}
    </Pressable>
  );
};

export default ShowAndHidePassword;
