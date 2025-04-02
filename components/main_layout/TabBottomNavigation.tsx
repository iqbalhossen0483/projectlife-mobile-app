import routes from "@/app/Routes/routes";
import { useThemeColor } from "@/hooks/useThemeColor";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Home from "../icons/Home";
import Patient from "../icons/Patient";
import Round from "../icons/Round";
import User from "../icons/User";
import { Box } from "../utils/Box";
import { Typography } from "../utils/Typography";

const navs = [
  {
    name: "Home",
    route: routes.home,
    Icon: Home,
  },
  {
    name: "Patients",
    route: routes.patients,
    Icon: Patient,
  },
  {
    name: "",
    route: undefined,
    Icon: undefined,
  },
  {
    name: "Round",
    route: routes.round,
    Icon: Round,
  },
  {
    name: "Account",
    route: routes.account,
    Icon: User,
  },
];

const TabBottomNavigation = (props: BottomTabBarProps) => {
  const activeTab = props.state.routeNames[props.state.index];
  const palceHolderColor = useThemeColor("placeholder");
  const primaryColor = useThemeColor("primary");
  const borderColor = useThemeColor("border");

  return (
    <Box style={[styles.container, { borderTopColor: borderColor }]}>
      {navs.map((item, i) => {
        if (item.name && item.route && item.Icon) {
          return (
            <Pressable
              style={styles.menu}
              onPress={() => props.navigation.navigate(item.route)}
              key={item.route}
            >
              <item.Icon
                color={
                  activeTab === item.route ? primaryColor : palceHolderColor
                }
              />
              <Typography
                color={activeTab === item.route ? "primary" : "placeholder"}
                style={{ fontWeight: 500, fontSize: 14 }}
              >
                {item.name}
              </Typography>
            </Pressable>
          );
        } else {
          return (
            <Pressable key={i}>
              <AntDesign
                style={styles.plus}
                name='pluscircle'
                size={55}
                color={primaryColor}
              />
            </Pressable>
          );
        }
      })}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 15,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  menu: {
    alignItems: "center",
  },
  plus: {
    marginTop: -50,
  },
});

export default TabBottomNavigation;
