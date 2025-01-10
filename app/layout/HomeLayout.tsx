import { Colors } from "@/constants/Colors";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationProp,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";
import ExploreScreen from "../pages/Explore";
import HomeScreen from "../pages/Home";
import Settings from "../pages/Settings";

const Tab = createMaterialTopTabNavigator();

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

const HomeLayout = () => {
  const colorScheme = useColorScheme();
  const screenOptions: ScreenOptions = ({ route }) => ({
    tabBarStyle: {
      paddingTop: 30,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 1,
      borderColor:
        colorScheme === "dark" ? Colors.dark.border : Colors.light.border,
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
      let iconName: string;
      let Icon: React.ComponentType<any> = MaterialIcons;
      switch (route.name) {
        case "Home":
          if (!focused) {
            Icon = Feather;
          }
          iconName = "home";
          break;
        case "Explore":
          Icon = FontAwesome5;
          iconName = focused ? "blogger" : "blogger-b";
          break;
        case "Settings":
          Icon = Ionicons;
          iconName = focused ? "settings-sharp" : "settings-outline";
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Explore' component={ExploreScreen} />
        <Tab.Screen name='Settings' component={Settings} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeLayout;
