import MainHeader from "@/components/main_layout/MainHeader";
import ProfileDrawer from "@/components/main_layout/ProfileDrawer";
import { useThemeColor } from "@/hooks/useThemeColor";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Profile from "../screens/Profile";
import ResetPassword from "../screens/ResetPassword";
import HomeRoute from "./HomeRoute";
import { routes } from "./routes";

const Drawer = createDrawerNavigator();

const ProfileRoute = () => {
  const backgroundColor = useThemeColor("background");

  return (
    <Drawer.Navigator
      drawerContent={(props) => <ProfileDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        header: ({ route }) => {
          if (route.name === routes.home_layout) {
            return <MainHeader navigation={navigation} />;
          } else return null;
        },
        drawerStyle: { backgroundColor, width: "70%" },
        drawerHideStatusBarOnOpen: true,
      })}
    >
      <Drawer.Screen name={routes.home_layout} component={HomeRoute} />
      <Drawer.Screen name={routes.profile} component={Profile} />
      <Drawer.Screen name={routes.reset_password} component={ResetPassword} />
    </Drawer.Navigator>
  );
};

export default ProfileRoute;
