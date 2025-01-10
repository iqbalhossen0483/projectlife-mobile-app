import React from "react";
import { StyleSheet } from "react-native";

import { Box } from "@/components/utils/Box";
import Link from "@/components/utils/Link";
import { Typography } from "@/components/utils/Typography";

export default function NotFoundScreen() {
  return (
    <Box style={styles.container}>
      <Typography type='title'>This screen doesn't exist.</Typography>
      <Link href='Home' style={styles.link}>
        <Typography type='link'>Go to home screen!</Typography>
      </Link>
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
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
