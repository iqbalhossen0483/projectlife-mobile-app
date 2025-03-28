import { Box } from "@/components/utils/Box";
import RippleButton from "@/components/utils/Button";
import { Typography } from "@/components/utils/Typography";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useEffect, useState } from "react";
import { OtpInput } from "react-native-otp-entry";
import SecondaryLayout from "../layouts/SecondaryLayout";

type Props = {
  route?: { params: { auth_type: "email" | "mobile" } };
};

const OTP = ({ route }: Props) => {
  const placeholderColor = useThemeColor("placeholder");
  const primaryColor = useThemeColor("primary");
  const [countdown, setCountdown] = useState(30);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (countdown === 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  function handleOtp() {
    const payload = { otp, auth_type: route?.params.auth_type };
    console.log(payload);
  }

  return (
    <SecondaryLayout>
      <Box style={{ paddingTop: 15, paddingHorizontal: 10 }}>
        <Typography color='primary' type='subtitle' style={{ marginBottom: 5 }}>
          OTP
        </Typography>
        <Typography>
          We have sent an OTP on your {route?.params.auth_type}.
        </Typography>

        <Box style={{ rowGap: 20 }}>
          <Box style={{ width: 280, alignSelf: "center", marginTop: 50 }}>
            <OtpInput
              numberOfDigits={4}
              focusColor={primaryColor}
              autoFocus={false}
              placeholder='****'
              onTextChange={(value) => setOtp(value)}
              type='numeric'
              theme={{
                placeholderTextStyle: { color: placeholderColor },
                pinCodeContainerStyle: { width: 60, height: 50 },
                containerStyle: { columnGap: 10 },
              }}
            />
          </Box>

          <Typography
            style={{
              textAlign: "center",
              fontWeight: 500,
              color: countdown === 0 ? placeholderColor : undefined,
            }}
          >
            00:{countdown}
          </Typography>

          <RippleButton
            onPress={handleOtp}
            disabled={countdown === 0 || !otp}
            style={{ width: "auto" }}
          >
            <Typography color='white'>Submit</Typography>
          </RippleButton>
        </Box>
      </Box>
    </SecondaryLayout>
  );
};

export default OTP;
