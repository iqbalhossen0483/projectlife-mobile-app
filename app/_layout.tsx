import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import QueryProvider from "@/providers/QueryProvider";

import { useThemeColor } from "@/hooks/useThemeColor";
import StoreProvider from "@/providers/StoreProvider";
import { ThemedToast } from "@/providers/ThemeToast";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import MainRoute from "./Routes/MainRoute";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgroundColor = useThemeColor("background");
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/Lato-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryProvider>
      <StoreProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
            <MainRoute />
            <ThemedToast />
          </SafeAreaView>
        </ThemeProvider>
      </StoreProvider>
    </QueryProvider>
  );
}
