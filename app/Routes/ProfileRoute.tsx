import MainHeader from "@/components/main_layout/MainHeader";
import ProfileDrawer from "@/components/main_layout/ProfileDrawer";
import { useThemeColor } from "@/hooks/useThemeColor";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import ResetPassword from "../screens/ResetPassword";
import { routes } from "./routes";

const Drawer = createDrawerNavigator();

const ProfileRoute = () => {
  const backgroundColor = useThemeColor("background");

  return (
    <Drawer.Navigator
      drawerContent={(props) => <ProfileDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        header: ({ route }) => (
          <MainHeader navigation={navigation} title={route.name} />
        ),
        drawerStyle: { backgroundColor, width: "70%" },
        drawerHideStatusBarOnOpen: true,
      })}
    >
      <Drawer.Screen name={routes.reset_password} component={ResetPassword} />
      <Drawer.Screen name={routes.profile} component={Profile} />
      <Drawer.Screen name={routes.home} component={Home} />
    </Drawer.Navigator>
  );
};

export default ProfileRoute;
