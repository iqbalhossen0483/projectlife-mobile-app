import { useLoginMutation } from "@/api/auth";
import ShowAndHidePassword from "@/components/common/ShowAndHidePassword";
import { Box } from "@/components/utils/Box";
import RippleButton from "@/components/utils/Button";
import Form from "@/components/utils/Form";
import Link from "@/components/utils/Link";
import { Typography } from "@/components/utils/Typography";
import useStore from "@/hooks/useStore";
import { useThemeColor } from "@/hooks/useThemeColor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Image } from "expo-image";
import React, { useState } from "react";
import SecondaryLayout from "../layouts/SecondaryLayout";
import { routes } from "../Routes/routes";

interface LoginPayload {
  email: string;
  password: string;
}

const Login = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const placeholderColor = useThemeColor("placeholder");
  const [showSecure, setShowSecure] = useState(false);
  const textSeconday = useThemeColor("textSeconday");
  const loginMutation = useLoginMutation();
  const store = useStore();

  async function handleSubmit(payload: LoginPayload) {
    loginMutation.mutate(payload, {
      onSuccess: (data) => {
        store?.setToastMessage({
          title: "Success",
          description: "Logged in successfully",
          onFinished: () => {
            navigation.navigate(routes.home);
          },
        });
        store?.setUser(data.user);
        AsyncStorage.setItem("token", data.token);
      },
      onError: (error) => {
        store?.setToastMessage({
          title: "Failed",
          description: error.message || "Something went wrong",
        });
      },
    });
  }

  const EtraElementForPassword = () => (
    <>
      <ShowAndHidePassword
        setShowSecure={setShowSecure}
        showSecure={showSecure}
      />
      <Link href='forget_password'>
        <Typography
          style={{
            fontWeight: 600,
            textAlign: "right",
            marginTop: 2,
          }}
        >
          Forgot Password
        </Typography>
      </Link>
    </>
  );

  return (
    <SecondaryLayout header={false}>
      <Box style={{ alignItems: "flex-end" }}>
        <Image
          style={{ width: 28, height: 28 }}
          source={require("../../assets/images/info-icon.svg")}
          contentFit='contain'
        />
      </Box>
      <Box style={{ alignItems: "center", marginTop: 40, marginBottom: 40 }}>
        <Image
          style={{ width: 180, height: 58 }}
          source={require("../../assets/images/logo.svg")}
          contentFit='contain'
        />
      </Box>

      <Box style={{ rowGap: 20, paddingHorizontal: 10 }}>
        <Form
          inputs={[
            {
              name: "email",
              label: "Email ID",
              placeholder: "Enter Email id",
              required: true,
              pattern: {
                regx: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please provide a valid email address",
              },
            },
            {
              name: "password",
              label: "Password",
              placeholder: "Password",
              secureTextEntry: true,
              required: true,
              JSXElement: <EtraElementForPassword />,
            },
          ]}
          title='Login'
          butnText='Login'
          onSubmit={handleSubmit}
        />

        <Typography style={{ textAlign: "center", color: textSeconday }}>
          ------------ OR ------------
        </Typography>

        <RippleButton
          href='login_with_otp'
          style={{ width: "auto" }}
          variant='outline'
        >
          <Typography color='primary' style={{ fontWeight: 600 }}>
            Login with OTP
          </Typography>
        </RippleButton>
      </Box>
    </SecondaryLayout>
  );
};

export default Login;
