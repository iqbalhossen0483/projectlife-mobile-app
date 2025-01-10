import React from "react";
import { StyleSheet } from "react-native";

import { Box } from "@/components/utils/Box";
import Button from "@/components/utils/Button";
import Card from "@/components/utils/Card";
import { Typography } from "@/components/utils/Typography";

export default function Settings() {
  return (
    <Box style={styles.container}>
      <Typography type='title'>This is Setting page</Typography>
      <Typography type='subtitle'>You can navigate from here</Typography>
      <Typography>And access your setting pages</Typography>

      <Card style={{ marginVertical: 20 }}>
        <Typography type='subtitle'>This is Card</Typography>
        <Typography>You can use it for your own</Typography>
      </Card>

      <Box style={{ gap: 5 }}>
        <Button href='Home'>
          <Typography>Home</Typography>
        </Button>
        <Button href='Explore'>
          <Typography>Explore</Typography>
        </Button>
        <Button href='Profile'>
          <Typography>Profile</Typography>
        </Button>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
