import { Box } from "@/components/utils/Box";
import { Typography } from "@/components/utils/Typography";
import React from "react";
import SecondaryLayout from "../layouts/SecondaryLayout";

const ResetPassword = () => {
  return (
    <SecondaryLayout title='Change Password'>
      <Box>
        <Typography>Reset password</Typography>
      </Box>
    </SecondaryLayout>
  );
};

export default ResetPassword;
