import { Box } from "@/components/utils/Box";
import { useThemeColor } from "@/hooks/useThemeColor";
import Entypo from "@expo/vector-icons/Entypo";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { Dimensions, Pressable } from "react-native";

const SecondaryLayout = ({
  children,
  header = true,
}: {
  children: React.ReactNode;
  header?: boolean;
}) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const primaryColor = useThemeColor("primary");
  const boderColor = useThemeColor("border");
  const backgroundColor = useThemeColor("background");

  return (
    <Box
      style={{
        minHeight: Dimensions.get("screen").height,
        paddingHorizontal: 10,
        paddingTop: 40,
        backgroundColor,
      }}
    >
      {header ? (
        <Box
          style={{
            borderBottomColor: boderColor,
            borderBottomWidth: 1,
            paddingBottom: 5,
            paddingLeft: 2,
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Entypo
              name='chevron-small-left'
              size={36}
              style={{ color: primaryColor }}
            />
          </Pressable>
        </Box>
      ) : null}
      {children}
    </Box>
  );
};

export default SecondaryLayout;
