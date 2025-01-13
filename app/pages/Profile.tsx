import React from "react";
import { StyleSheet } from "react-native";

import { Box } from "@/components/utils/Box";
import Button from "@/components/utils/Button";
import { Typography } from "@/components/utils/Typography";

const Profile = () => {
  return (
    <Box style={styles.container}>
      <Typography type='title'>This is Profile page</Typography>
      <Typography>Name: Md Iqbal Hossen</Typography>
      <Box style={{ gap: 10, marginTop: 10 }}>
        <Button variant='containd' href='HomeLayout'>
          <Typography>Home</Typography>
        </Button>
        <Button variant='outline'>
          <Typography>Order</Typography>
        </Button>
        <Button variant='text' ripple={false}>
          <Typography>Order</Typography>
        </Button>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

export default Profile;
