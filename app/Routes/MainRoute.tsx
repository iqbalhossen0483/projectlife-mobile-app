import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ForgetPassword from "../screens/ForgetPassword";
import Login from "../screens/Login";
import LoginWithOTP from "../screens/LoginWithOTP";
import OTP from "../screens/OTP";
import { routes } from "./routes";

const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.login}
      screenOptions={{
        headerShown: false,
        animation: "slide_from_left",
      }}
    >
      <Stack.Screen name={routes.forget_password} component={ForgetPassword} />
      <Stack.Screen name={routes.login_with_otp} component={LoginWithOTP} />
      <Stack.Screen name={routes.login} component={Login} />
      <Stack.Screen name={routes.otp} component={OTP} />
    </Stack.Navigator>
  );
};

export default MainRoute;
