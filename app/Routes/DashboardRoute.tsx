import MainHeader from "@/components/main_layout/MainHeader";
import MainDrawer from "@/components/main_layout/MiainDrawer";
import { useThemeColor } from "@/hooks/useThemeColor";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "../screens/Home";
import { routes } from "./routes";

const Drawer = createDrawerNavigator();

const DashboardRoute = () => {
  const backgroundColor = useThemeColor("background");

  return (
    <Drawer.Navigator
      drawerContent={(props) => <MainDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        header: ({ route }) => (
          <MainHeader navigation={navigation} title={route.name} />
        ),
        drawerStyle: { backgroundColor, width: "70%" },
        drawerHideStatusBarOnOpen: true,
      })}
    >
      <Drawer.Screen name={routes.home} component={Home} />
    </Drawer.Navigator>
  );
};

export default DashboardRoute;
