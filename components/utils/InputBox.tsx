import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

type InputBoxProps = TextInputProps & {
  width?: number;
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
};

const InputBox = ({
  width = 200,
  style,
  value,
  onChangeText,
  placeholder,
  ...props
}: InputBoxProps) => {
  const backgroundColor = useThemeColor("background");
  const textColor = useThemeColor("text");
  const placeholderColor = useThemeColor("placeholder");
  const borderColor = useThemeColor("border");

  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        placeholder={placeholder || "Enter your text"}
        value={value}
        onChangeText={(value) => onChangeText(value)}
        style={[
          styles.input,
          {
            backgroundColor,
            color: textColor,
            borderColor,
          },
          style,
        ]}
        placeholderTextColor={placeholderColor}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
  },
});

export default InputBox;
