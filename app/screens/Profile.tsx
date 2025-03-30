import { Box } from "@/components/utils/Box";
import { Typography } from "@/components/utils/Typography";
import React from "react";
import SecondaryLayout from "../layouts/SecondaryLayout";

const Profile = () => {
  return (
    <SecondaryLayout title='Profile'>
      <Box>
        <Typography>Profile</Typography>
      </Box>
    </SecondaryLayout>
  );
};

export default Profile;
