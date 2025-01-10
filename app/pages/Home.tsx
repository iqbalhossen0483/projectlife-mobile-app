import { Image, Platform, StyleSheet } from "react-native";

import { Box } from "@/components/utils/Box";
import { HelloWave } from "@/components/utils/HelloWave";
import ParallaxScrollView from "@/components/utils/ParallaxScrollView";
import { Typography } from "@/components/utils/Typography";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <Box style={styles.titleContainer}>
        <Typography type='title'>Welcome!</Typography>
        <HelloWave />
      </Box>
      <Box style={styles.stepContainer}>
        <Typography type='subtitle'>Step 1: Try it</Typography>
        <Typography>
          Edit{" "}
          <Typography type='defaultSemiBold'>app/(tabs)/index.tsx</Typography>{" "}
          to see changes. Press{" "}
          <Typography type='defaultSemiBold'>
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </Typography>{" "}
          to open developer tools.
        </Typography>
      </Box>
      <Box style={styles.stepContainer}>
        <Typography type='subtitle'>Step 2: Explore</Typography>
        <Typography>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </Typography>
      </Box>
      <Box style={styles.stepContainer}>
        <Typography type='subtitle'>Step 3: Get a fresh start</Typography>
        <Typography>
          When you're ready, run{" "}
          <Typography type='defaultSemiBold'>npm run reset-project</Typography>{" "}
          to get a fresh <Typography type='defaultSemiBold'>app</Typography>{" "}
          directory. This will move the current{" "}
          <Typography type='defaultSemiBold'>app</Typography> to{" "}
          <Typography type='defaultSemiBold'>app-example</Typography>.
        </Typography>
      </Box>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
