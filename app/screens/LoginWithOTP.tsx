import { Box } from "@/components/utils/Box";
import RippleButton from "@/components/utils/Button";
import InputBox from "@/components/utils/InputBox";
import { Typography } from "@/components/utils/Typography";
import useStore from "@/hooks/useStore";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React, { useState } from "react";
import SecondaryLayout from "../layouts/SecondaryLayout";
import { routes } from "../Routes/routes";

const LoginWithOTP = () => {
  const [authType, setAuthType] = useState({ mobile: false, email: false });
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const textSeconday = useThemeColor("textSeconday");
  const [value, setValue] = useState("");
  const store = useStore();

  function handleOtp() {
    try {
      const auth_type = authType.email
        ? "email"
        : authType.mobile
        ? "mobile"
        : null;
      if (!authType) throw { message: "Invalid auth type" };
      const payload = { auth_type, value };
      console.log(payload);
      navigation.navigate(routes.otp, { auth_type });
    } catch (error: any) {
      store?.setToastMessage({ title: "Failed", description: error.message });
    }
  }
  return (
    <SecondaryLayout>
      <Box style={{ paddingTop: 15, paddingHorizontal: 10 }}>
        <Typography color='primary' type='subtitle' style={{ marginBottom: 5 }}>
          OTP
        </Typography>
        <Typography>Select one on which you want to receive OTP</Typography>

        <Box style={{ rowGap: 30, marginTop: 30 }}>
          <Box style={{ rowGap: 15 }}>
            <RippleButton
              onPress={() => setAuthType({ email: true, mobile: false })}
              variant='outline'
              style={{ width: "auto" }}
            >
              <Typography color='primary'>Get an OTP in your Email</Typography>
            </RippleButton>
            {authType.email && (
              <Box style={{ rowGap: 5 }}>
                <Typography style={{ fontWeight: 500 }}>Email ID</Typography>
                <InputBox
                  value={value}
                  onChangeText={(value) => setValue(value)}
                  placeholder='Enter Email ID'
                />
              </Box>
            )}
          </Box>

          <Typography style={{ textAlign: "center", color: textSeconday }}>
            ------------ OR ------------
          </Typography>

          <Box style={{ rowGap: 15 }}>
            <RippleButton
              onPress={() => setAuthType({ email: false, mobile: true })}
              variant='outline'
              style={{ width: "auto" }}
            >
              <Typography color='primary'>
                Get an OTP in your Mobile no.
              </Typography>
            </RippleButton>
            {authType.mobile && (
              <Box style={{ rowGap: 5 }}>
                <Typography style={{ fontWeight: 500 }}>Mobile No.</Typography>
                <InputBox
                  value={value}
                  onChangeText={(value) => setValue(value)}
                  placeholder='Enter Mobile No'
                />
              </Box>
            )}
          </Box>
          <RippleButton
            disabled={!authType.email && !authType.mobile}
            onPress={handleOtp}
            style={{ width: "auto" }}
          >
            <Typography color='white'>Submit</Typography>
          </RippleButton>
        </Box>
      </Box>
    </SecondaryLayout>
  );
};

export default LoginWithOTP;
