import React from "react";
import { StyleSheet } from "react-native";

import { Box } from "@/components/utils/Box";
import Button from "@/components/utils/Button";
import { Typography } from "@/components/utils/Typography";

const Orders = () => {
  return (
    <Box style={styles.container}>
      <Typography type='title'>This is Order page</Typography>
      <Typography>Order 1</Typography>
      <Box>
        <Button href='HomeLayout' style={styles.link}>
          <Typography>Home</Typography>
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

export default Orders;
