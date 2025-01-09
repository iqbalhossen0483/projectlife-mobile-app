import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import NotFoundScreen from "./NotFound";
import ExploreScreen from "./pages/Explore";
import HomeScreen from "./pages/Home";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const Drawer = createDrawerNavigator();

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
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Explore' component={ExploreScreen} />
        <Drawer.Screen
          name='NotFound'
          component={NotFoundScreen}
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        />
      </Drawer.Navigator>
      <StatusBar style='auto' />
    </ThemeProvider>
  );
}
