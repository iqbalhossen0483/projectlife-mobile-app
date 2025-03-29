import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import React from "react";
import { Box } from "../utils/Box";
import ProfileImage from "../utils/ProfileImage";

const MainDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <Box>
        <ProfileImage style={{ height: 50, width: 50 }} />
      </Box>
    </DrawerContentScrollView>
  );
};

export default MainDrawer;
