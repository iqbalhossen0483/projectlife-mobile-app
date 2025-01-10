import {
  DarkTheme,
  DefaultTheme,
  ParamListBase,
  RouteProp,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationProp,
} from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native";
import NotFoundScreen from "./NotFound";
import ExploreScreen from "./pages/Explore";
import HomeScreen from "./pages/Home";

type ScreenOptions =
  | ((props: {
      route: RouteProp<ParamListBase, string>;
      navigation: MaterialTopTabNavigationProp<
        ParamListBase,
        string,
        undefined
      >;
      theme: ReactNavigation.Theme;
    }) => MaterialTopTabNavigationOptions)
  | undefined;

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const Tab = createMaterialTopTabNavigator();

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

  const screenOptions: ScreenOptions = ({ route }) => ({
    tabBarStyle: {
      paddingTop: 30,
      backgroundColor:
        colorScheme === "dark"
          ? Colors.dark.background
          : Colors.light.background,
    },
    tabBarIndicatorStyle: {
      backgroundColor:
        colorScheme === "dark"
          ? Colors.light.background
          : Colors.dark.background,
    },
    tabBarLabel: ({ focused }) => {
      let iconName: React.ComponentProps<typeof MaterialIcons>["name"];
      let Icon: React.ComponentType<any> = MaterialIcons;
      switch (route.name) {
        case "Home":
          if (!focused) {
            Icon = Feather;
          }
          iconName = "home";
          break;
        case "Explore":
          iconName = focused ? "explore" : "explore-off";
          break;
        case "NotFound":
          iconName = focused ? "error" : "error-outline";
          break;
        default:
          iconName = "help-outline";
      }
      return (
        <Icon
          name={iconName}
          size={24}
          color={colorScheme === "dark" ? Colors.dark.text : Colors.light.text}
        />
      );
    },
  });

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Explore' component={ExploreScreen} />
          <Tab.Screen name='NotFound' component={NotFoundScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </ThemeProvider>
  );
}
