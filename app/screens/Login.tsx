import { Box } from "@/components/utils/Box";
import RippleButton from "@/components/utils/Button";
import Form from "@/components/utils/Form";
import { Typography } from "@/components/utils/Typography";
import { useThemeColor } from "@/hooks/useThemeColor";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable } from "react-native";
import SecondaryLayout from "../layout/SecondaryLayout";

const Login = () => {
  const [showSecure, setShowSecure] = useState(false);
  const textSeconday = useThemeColor("textSeconday");
  const placeholderColor = useThemeColor("placeholder");

  function handleForgetPassword() {
    console.log("password");
  }

  async function handleSubmit(data: Record<string, string>) {
    console.log(data);
  }

  const EtraElementForPassword = () => (
    <>
      <Pressable
        onPress={() => setShowSecure((prev) => !prev)}
        style={{ position: "absolute", right: 10, top: 12 }}
      >
        {!showSecure ? (
          <FontAwesome6
            style={{ color: placeholderColor }}
            name='eye'
            size={20}
          />
        ) : (
          <FontAwesome6
            name='eye-slash'
            size={19}
            style={{ color: placeholderColor }}
          />
        )}
      </Pressable>
      <Pressable onPress={handleForgetPassword}>
        <Typography
          style={{
            fontWeight: 600,
            textAlign: "right",
            marginTop: 2,
          }}
        >
          Forgot Password
        </Typography>
      </Pressable>
    </>
  );

  return (
    <SecondaryLayout>
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

        <RippleButton style={{ width: "auto" }} variant='outline'>
          <Typography color='primary' style={{ fontWeight: 600 }}>
            Login with OTP
          </Typography>
        </RippleButton>
      </Box>
    </SecondaryLayout>
  );
};

export default Login;
