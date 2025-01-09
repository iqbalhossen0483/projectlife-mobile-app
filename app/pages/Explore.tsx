import { Image, Platform, StyleSheet } from "react-native";

import { Box } from "@/components/utils/Box";
import { Collapsible } from "@/components/utils/Collapsible";
import { ExternalLink } from "@/components/utils/ExternalLink";
import { Iconify } from "@/components/utils/Iconify.android";
import ParallaxScrollView from "@/components/utils/ParallaxScrollView";
import { Typografy } from "@/components/utils/Typografy";

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Iconify
          size={310}
          color='#808080'
          name='chevron.left.forwardslash.chevron.right'
          style={styles.headerImage}
        />
      }
    >
      <Box style={styles.titleContainer}>
        <Typografy type='title'>Explore</Typografy>
      </Box>
      <Typografy>
        This app includes example code to help you get started.
      </Typografy>
      <Collapsible title='File-based routing'>
        <Typografy>
          This app has two screens:{" "}
          <Typografy type='defaultSemiBold'>app/(tabs)/index.tsx</Typografy> and{" "}
          <Typografy type='defaultSemiBold'>app/(tabs)/explore.tsx</Typografy>
        </Typografy>
        <Typografy>
          The layout file in{" "}
          <Typografy type='defaultSemiBold'>app/(tabs)/_layout.tsx</Typografy>{" "}
          sets up the tab navigator.
        </Typografy>
        <ExternalLink href='https://docs.expo.dev/router/introduction'>
          <Typografy type='link'>Learn more</Typografy>
        </ExternalLink>
      </Collapsible>
      <Collapsible title='Android, iOS, and web support'>
        <Typografy>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <Typografy type='defaultSemiBold'>w</Typografy> in
          the terminal running this project.
        </Typografy>
      </Collapsible>
      <Collapsible title='Images'>
        <Typografy>
          For static images, you can use the{" "}
          <Typografy type='defaultSemiBold'>@2x</Typografy> and{" "}
          <Typografy type='defaultSemiBold'>@3x</Typografy> suffixes to provide
          files for different screen densities
        </Typografy>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ alignSelf: "center" }}
        />
        <ExternalLink href='https://reactnative.dev/docs/images'>
          <Typografy type='link'>Learn more</Typografy>
        </ExternalLink>
      </Collapsible>
      <Collapsible title='Custom fonts'>
        <Typografy>
          Open <Typografy type='defaultSemiBold'>app/_layout.tsx</Typografy> to
          see how to load{" "}
          <Typografy style={{ fontFamily: "SpaceMono" }}>
            custom fonts such as this one.
          </Typografy>
        </Typografy>
        <ExternalLink href='https://docs.expo.dev/versions/latest/sdk/font'>
          <Typografy type='link'>Learn more</Typografy>
        </ExternalLink>
      </Collapsible>
      <Collapsible title='Light and dark mode components'>
        <Typografy>
          This template has light and dark mode support. The{" "}
          <Typografy type='defaultSemiBold'>useColorScheme()</Typografy> hook
          lets you inspect what the user's current color scheme is, and so you
          can adjust UI colors accordingly.
        </Typografy>
        <ExternalLink href='https://docs.expo.dev/develop/user-interface/color-themes/'>
          <Typografy type='link'>Learn more</Typografy>
        </ExternalLink>
      </Collapsible>
      <Collapsible title='Animations'>
        <Typografy>
          This template includes an example of an animated component. The{" "}
          <Typografy type='defaultSemiBold'>components/HelloWave.tsx</Typografy>{" "}
          component uses the powerful{" "}
          <Typografy type='defaultSemiBold'>react-native-reanimated</Typografy>{" "}
          library to create a waving hand animation.
        </Typografy>
        {Platform.select({
          ios: (
            <Typografy>
              The{" "}
              <Typografy type='defaultSemiBold'>
                components/ParallaxScrollView.tsx
              </Typografy>{" "}
              component provides a parallax effect for the header image.
            </Typografy>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
