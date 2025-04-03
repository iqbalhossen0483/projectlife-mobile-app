import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AssignWard from "../screens/AssignWard";
import ExportData from "../screens/ExportData";
import ForgetPassword from "../screens/ForgetPassword";
import Loading from "../screens/Loading";
import Login from "../screens/Login";
import LoginWithOTP from "../screens/LoginWithOTP";
import OTP from "../screens/OTP";
import Staff from "../screens/Staff";
import Wards from "../screens/Wards";
import ProfileRoute from "./ProfileRoute";
import { routes } from "./routes";

const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.loading}
      screenOptions={{
        headerShown: false,
        animation: "slide_from_left",
      }}
    >
      {/* auth routes start */}
      <Stack.Screen name={routes.forget_password} component={ForgetPassword} />
      <Stack.Screen name={routes.login_with_otp} component={LoginWithOTP} />
      <Stack.Screen name={routes.login} component={Login} />
      <Stack.Screen name={routes.otp} component={OTP} />
      <Stack.Screen name={routes.loading} component={Loading} />
      {/* auth rotues end  */}

      <Stack.Screen name={routes.profile_layout} component={ProfileRoute} />

      {/* Account pages start */}
      <Stack.Screen name={routes.wards} component={Wards} />
      <Stack.Screen name={routes.staff} component={Staff} />
      <Stack.Screen name={routes.export_data} component={ExportData} />
      {/* Account pages end */}

      <Stack.Screen name={routes.assign_ward} component={AssignWard} />
    </Stack.Navigator>
  );
};

export default MainRoute;
