import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Box } from "../utils/Box";
import { Typography } from "../utils/Typography";

const TabBottomNavigation = (props: BottomTabBarProps) => {
  return (
    <Box>
      <Typography>Bottom bar</Typography>
    </Box>
  );
};

export default TabBottomNavigation;
