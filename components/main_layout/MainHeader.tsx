import { Box } from "@/components/utils/Box";
import { Typography } from "@/components/utils/Typography";
import useStore from "@/hooks/useStore";
import { useThemeColor } from "@/hooks/useThemeColor";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { ParamListBase } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native-gesture-handler";
import ProfileImage from "../utils/ProfileImage";

interface Props {
  navigation: DrawerNavigationProp<ParamListBase>;
}

const MainHeader = ({ navigation }: Props) => {
  const placeHolderColor = useThemeColor("placeholder");
  const backgroundColor = useThemeColor("background");
  const primaryColor = useThemeColor("primary");
  const borderColor = useThemeColor("border");
  const store = useStore();

  return (
    <Box style={[styles.container, { borderBottomColor: borderColor }]}>
      <Box style={styles.wrapper}>
        <Box style={styles.name_bar_logo}>
          <Pressable onPress={() => navigation.openDrawer()}>
            <FontAwesome6
              name='bars-staggered'
              size={22}
              color={primaryColor}
            />
          </Pressable>
          <ProfileImage
            style={[styles.profile, { borderColor: borderColor }]}
          />
          <Typography style={{ fontSize: 18, fontWeight: 600 }}>
            {store?.user?.hospital_name}
          </Typography>
        </Box>
        <Box style={{ position: "relative" }}>
          <MaterialIcons
            name='notifications'
            size={24}
            color={placeHolderColor}
          />
          <Box
            style={[
              styles.notification_top,
              { backgroundColor: primaryColor, borderColor: backgroundColor },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name_bar_logo: { flexDirection: "row", alignItems: "center", gap: 10 },
  profile: {
    width: 35,
    height: 35,
    borderWidth: 2,
    borderRadius: 200,
  },
  notification_top: {
    width: 11,
    height: 11,
    borderRadius: 100,
    borderWidth: 1.5,
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default MainHeader;
