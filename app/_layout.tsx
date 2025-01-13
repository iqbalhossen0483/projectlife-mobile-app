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

import { ThemedToast } from "@/components/provider/ThemeToast";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import HomeLayout from "./layout/HomeLayout";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        <Stack.Navigator
          initialRouteName='HomeLayout'
          screenOptions={{
            headerShown: false,
            animation: "slide_from_left",
          }}
        >
          <Stack.Screen name='HomeLayout' component={HomeLayout} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Order' component={Orders} />
        </Stack.Navigator>
        <ThemedToast />
      </SafeAreaView>
    </ThemeProvider>
  );
}
