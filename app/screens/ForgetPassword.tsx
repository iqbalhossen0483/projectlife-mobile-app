import { Box } from "@/components/utils/Box";
import RippleButton from "@/components/utils/Button";
import InputBox from "@/components/utils/InputBox";
import { Typography } from "@/components/utils/Typography";
import React, { useState } from "react";
import SecondaryLayout from "../layouts/SecondaryLayout";

const ForgetPassword = () => {
  const [value, setValue] = useState("");

  function handleSubmit() {
    console.log({ email: value });
  }

  return (
    <SecondaryLayout>
      <Box style={{ paddingTop: 15, paddingHorizontal: 10, rowGap: 40 }}>
        <Box>
          <Typography type='subtitle' color='primary'>
            Email ID
          </Typography>
          <Typography style={{ marginTop: 10 }}>
            Please enter your registered email id to receive password reset otp
          </Typography>
        </Box>

        <Box style={{ rowGap: 5 }}>
          <Typography style={{ fontWeight: 500 }}>Email ID</Typography>
          <InputBox
            value={value}
            onChangeText={(value) => setValue(value)}
            placeholder='Enter Email ID'
          />
        </Box>

        <RippleButton
          onPress={handleSubmit}
          disabled={!value}
          style={{ width: "auto" }}
        >
          <Typography color='white'>Submit</Typography>
        </RippleButton>
      </Box>
    </SecondaryLayout>
  );
};

export default ForgetPassword;
