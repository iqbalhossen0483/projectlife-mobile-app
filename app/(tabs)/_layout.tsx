import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { Iconify } from "@/components/utils/Iconify.android";
import TabBarBackground from "@/components/utils/TabBarBackground";
import { TabButton } from "@/components/utils/TabButton";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  console.log({ colorScheme });
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: TabButton,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Iconify size={28} name='house.fill' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Iconify size={28} name='paperplane.fill' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
