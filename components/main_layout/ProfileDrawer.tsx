import routes from "@/app/Routes/routes";
import useStore from "@/hooks/useStore";
import { useThemeColor } from "@/hooks/useThemeColor";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Box } from "../utils/Box";
import RippleButton from "../utils/Button";
import ProfileImage from "../utils/ProfileImage";
import Switch from "../utils/Switch";
import { Typography } from "../utils/Typography";

const ProfileDrawer = (props: DrawerContentComponentProps) => {
  const [notificationOn, setNotificationOn] = useState(true);
  const placeholderColor = useThemeColor("placeholder");
  const primaryColor = useThemeColor("primary");
  const [dutyOn, setDutyOn] = useState(true);
  const whiteColor = useThemeColor("white");
  const store = useStore();

  return (
    <Box style={{ position: "relative", height: "100%" }}>
      {/* header start */}
      <Box style={[styles.headerContainer, { backgroundColor: primaryColor }]}>
        <ProfileImage style={{ height: 50, width: 50, borderRadius: 10 }} />
        <Typography color='white' style={{ fontWeight: 500 }}>
          {store?.user?.hospital_name}
        </Typography>

        <Pressable
          onPress={() => props.navigation.closeDrawer()}
          style={[styles.closeIcon, { borderColor: whiteColor }]}
        >
          <MaterialIcons name='close' size={22} style={{ color: whiteColor }} />
        </Pressable>
      </Box>
      {/* header end */}

      <Box style={styles.container}>
        {/* duty status start */}
        <Box style={[styles.row, { paddingHorizontal: 10 }]}>
          <Typography style={{ fontWeight: 500 }}>Your Duty Status:</Typography>
          <Box style={[styles.row, { gap: 5 }]}>
            <Typography
              color={dutyOn ? "placeholder" : undefined}
              style={{ fontWeight: 500 }}
            >
              Off
            </Typography>
            <Switch open={dutyOn} setOpen={setDutyOn} />
            <Typography style={{ fontWeight: 500 }}>On</Typography>
          </Box>
        </Box>
        {/* duty status end */}

        {/* profile setting start */}
        <Box style={{ marginTop: 20 }}>
          <RippleButton
            onPress={() => props.navigation.navigate(routes.profile)}
            variant='text'
            style={{ ...styles.row, width: "auto", paddingHorizontal: 10 }}
          >
            <View style={[styles.row, { gap: 10 }]}>
              <FontAwesome5 name='user-cog' size={18} color={primaryColor} />
              <Typography style={{ fontWeight: 500 }}>
                Profile Settings
              </Typography>
            </View>
            <Entypo
              name='chevron-small-right'
              size={24}
              color={placeholderColor}
            />
          </RippleButton>
          {/* profile setting end */}

          {/* change password start */}
          <RippleButton
            onPress={() => props.navigation.navigate(routes.reset_password)}
            variant='text'
            style={{ ...styles.row, width: "auto", paddingHorizontal: 10 }}
          >
            <View style={[styles.row, { gap: 10 }]}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../../assets/images/password.svg")}
              />
              <Typography style={{ fontWeight: 500 }}>
                Change Password
              </Typography>
            </View>
            <Entypo
              name='chevron-small-right'
              size={24}
              color={placeholderColor}
            />
          </RippleButton>
          {/* change password end */}

          {/* Notification start */}
          <RippleButton
            variant='text'
            ripple={false}
            style={{ ...styles.row, width: "auto", paddingHorizontal: 10 }}
          >
            <Box style={[styles.row, { gap: 10 }]}>
              <MaterialIcons
                name='notifications'
                size={24}
                color={primaryColor}
              />
              <Typography style={{ fontWeight: 500 }}>Notification</Typography>
            </Box>
            <Switch open={notificationOn} setOpen={setNotificationOn} />
          </RippleButton>
          {/* Notification end */}

          {/* log out start */}
          <RippleButton variant='text' style={styles.logout}>
            <View style={[styles.row, { gap: 10 }]}>
              <MaterialIcons name='logout' size={24} color={primaryColor} />
              <Typography style={{ fontWeight: 500 }}>Logout</Typography>
            </View>
          </RippleButton>
          {/* log out end */}
        </Box>
      </Box>

      {/* footer start */}
      <Box style={{ position: "absolute", bottom: 30, left: 20 }}>
        <Typography color='placeholder'>Version: 1.0.0</Typography>
        <Box style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
          <Typography style={{ fontWeight: 500 }}>Made with</Typography>
          <Image
            style={{ height: 16, width: 18 }}
            source={require("../../assets/images/love.svg")}
            contentFit='contain'
          />
          <Typography style={{ fontWeight: 500 }}>by LCG</Typography>
        </Box>
      </Box>
      {/* footer end */}
    </Box>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
    padding: 2,
    position: "absolute",
    top: 20,
    right: 10,
  },
  headerContainer: {
    paddingTop: 80,
    paddingBottom: 30,
    paddingHorizontal: 15,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    position: "relative",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    padding: 5,
  },
  logout: {
    width: "auto",
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
});

export default ProfileDrawer;
