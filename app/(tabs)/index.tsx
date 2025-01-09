import { Image, Platform, StyleSheet } from "react-native";

import { Box } from "@/components/utils/Box";
import { HelloWave } from "@/components/utils/HelloWave";
import ParallaxScrollView from "@/components/utils/ParallaxScrollView";
import { Typografy } from "@/components/utils/Typografy";

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
        <Typografy type='title'>Welcome!</Typografy>
        <HelloWave />
      </Box>
      <Box style={styles.stepContainer}>
        <Typografy type='subtitle'>Step 1: Try it</Typografy>
        <Typografy>
          Edit{" "}
          <Typografy type='defaultSemiBold'>app/(tabs)/index.tsx</Typografy> to
          see changes. Press{" "}
          <Typografy type='defaultSemiBold'>
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </Typografy>{" "}
          to open developer tools.
        </Typografy>
      </Box>
      <Box style={styles.stepContainer}>
        <Typografy type='subtitle'>Step 2: Explore</Typografy>
        <Typografy>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </Typografy>
      </Box>
      <Box style={styles.stepContainer}>
        <Typografy type='subtitle'>Step 3: Get a fresh start</Typografy>
        <Typografy>
          When you're ready, run{" "}
          <Typografy type='defaultSemiBold'>npm run reset-project</Typografy> to
          get a fresh <Typografy type='defaultSemiBold'>app</Typografy>{" "}
          directory. This will move the current{" "}
          <Typografy type='defaultSemiBold'>app</Typografy> to{" "}
          <Typografy type='defaultSemiBold'>app-example</Typografy>.
        </Typografy>
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
