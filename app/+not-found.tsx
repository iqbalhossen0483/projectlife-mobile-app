import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { Box } from "@/components/utils/Box";
import { Typografy } from "@/components/utils/Typografy";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Box style={styles.container}>
        <Typografy type='title'>This screen doesn't exist.</Typografy>
        <Link href='/' style={styles.link}>
          <Typografy type='link'>Go to home screen!</Typografy>
        </Link>
      </Box>
    </>
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
