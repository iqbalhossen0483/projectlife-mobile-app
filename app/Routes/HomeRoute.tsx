import TabBottomNavigation from "@/components/main_layout/TabBottomNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Account from "../screens/Account";
import Home from "../screens/Home";
import Patients from "../screens/Patients";
import Round from "../screens/Round";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const HomeRoute = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.home}
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBottomNavigation {...props} />}
    >
      <Tab.Screen name={routes.home} component={Home} />
      <Tab.Screen name={routes.patients} component={Patients} />
      <Tab.Screen name={routes.round} component={Round} />
      <Tab.Screen name={routes.account} component={Account} />
    </Tab.Navigator>
  );
};

export default HomeRoute;
