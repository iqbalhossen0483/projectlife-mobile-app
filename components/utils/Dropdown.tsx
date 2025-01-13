import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

type Props = {
  width?: number;
  style?: ViewStyle;
  data: { label: string; value: string }[];
  placeholder?: string;
  setData: (value: string) => void;
  searchable?: boolean;
};

export default function DropDown({
  data,
  style,
  width = 200,
  placeholder,
  setData,
  searchable = false,
}: Props) {
  const backgroundColor = useThemeColor("background");
  const textColor = useThemeColor("text");
  const borderColor = useThemeColor("border");
  const placeholderColor = useThemeColor("placeholder");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);

  return (
    <View style={[styles.container, style, { width }]}>
      <DropDownPicker
        searchable={searchable}
        open={open}
        value={value}
        items={data}
        setOpen={setOpen}
        setValue={setValue}
        onChangeValue={(value) => setData(value || "")}
        placeholder={placeholder || "Select"}
        theme='DARK'
        placeholderStyle={[styles.placeholder, { color: placeholderColor }]}
        style={[
          styles.dropdown,
          {
            backgroundColor,
            borderColor,
          },
        ]}
        textStyle={{
          color: textColor,
        }}
        dropDownContainerStyle={[
          styles.dropdownContainer,
          {
            backgroundColor,
            borderColor,
          },
        ]}
        listMode='SCROLLVIEW'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 20,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderRadius: 8,
    zIndex: 20,
  },
  placeholder: {
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
