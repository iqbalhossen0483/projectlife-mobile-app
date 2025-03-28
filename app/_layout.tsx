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

import StoreProvider from "@/providers/StoreProvider";
import { ThemedToast } from "@/providers/ThemeToast";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Login from "./screens/Login";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function RootLayout() {
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
          <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
            <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
            <Stack.Navigator
              initialRouteName='login'
              screenOptions={{
                headerShown: false,
                animation: "slide_from_left",
              }}
            >
              <Stack.Screen name='login' component={Login} />
            </Stack.Navigator>
            <ThemedToast />
          </SafeAreaView>
        </ThemeProvider>
      </StoreProvider>
    </QueryProvider>
  );
}
