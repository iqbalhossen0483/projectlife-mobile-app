import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import Card from "../utils/Card";
import InputBox from "../utils/InputBox";

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const SearchAndFilter = ({ value, onChange }: Props) => {
  const placeholderColor = useThemeColor("placeholder");

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
      }}
    >
      <Card
        style={{
          flex: 1,
          paddingVertical: 0,
          paddingHorizontal: 0,
        }}
      >
        <View style={{ width: "100%", position: "relative" }}>
          <InputBox
            placeholder='Search Patient'
            value={value}
            style={{
              borderWidth: 0,
              width: "100%",
              height: "auto",
              paddingLeft: 35,
            }}
            onChangeText={onChange}
          />
          <Ionicons
            style={{
              position: "absolute",
              left: 5,
              top: "50%",
              transform: [{ translateY: "-50%" }],
            }}
            name='search'
            size={24}
            color={placeholderColor}
          />
        </View>
      </Card>
      <Card style={{ paddingVertical: 12 }}>
        <Image
          style={{ height: 16, width: 27 }}
          source={require("../../assets/icons/filter.svg")}
        />
      </Card>
    </View>
  );
};

export default SearchAndFilter;
