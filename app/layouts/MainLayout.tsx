import { Box } from "@/components/utils/Box";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const backgroundColor = useThemeColor("background");
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Box style={{ marginTop: 40, marginHorizontal: 10 }}>
        <Box></Box>

        {children}
      </Box>
    </SafeAreaView>
  );
};

export default MainLayout;
