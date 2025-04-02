import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useEffect, useRef } from "react";
import { Animated, Pressable, ScrollView, View } from "react-native";
import { Typography } from "../utils/Typography";

const routes = [
  { name: "All Patients", width: 100 },
  { name: "High Risk Patients", width: 125 },
  { name: "Delivery in Progress", width: 140 },
];

interface Props {
  tab: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs = ({ tab, onChange }: Props) => {
  const cardBackgroundColor = useThemeColor("cardBackground");
  const primaryColor = useThemeColor("primary");

  const underlinePosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const tabIndex = routes.findIndex((route) => route.name === tab);
    const selectedTab = routes.find((route) => route.name === tab);

    // Animate the underline position
    Animated.spring(underlinePosition, {
      toValue: tabIndex * selectedTab?.width!,
      useNativeDriver: false,
    }).start();
  }, [tab]);

  return (
    <View
      style={{
        backgroundColor: cardBackgroundColor,
        marginBottom: 5,
        paddingVertical: 10,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            paddingHorizontal: 10,
          }}
        >
          {routes.map((item, i) => (
            <Pressable onPress={() => onChange(item.name)} key={i}>
              <Typography
                color={tab === item.name ? "primary" : "textSeconday"}
                style={{ fontWeight: "500" }}
              >
                {item.name}
              </Typography>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Animated.View
        style={{
          position: "absolute",
          height: 3,
          width: 75,
          left: 10,
          bottom: 0,
          backgroundColor: primaryColor,
          transform: [{ translateX: underlinePosition }],
        }}
      />
    </View>
  );
};

export default Tabs;
