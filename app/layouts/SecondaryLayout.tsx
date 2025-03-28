import { Box } from "@/components/utils/Box";
import { useThemeColor } from "@/hooks/useThemeColor";
import Entypo from "@expo/vector-icons/Entypo";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, SafeAreaView, useColorScheme } from "react-native";

const SecondaryLayout = ({
  children,
  header = true,
}: {
  children: React.ReactNode;
  header?: boolean;
}) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const backgroundColor = useThemeColor("background");
  const primaryColor = useThemeColor("primary");
  const boderColor = useThemeColor("border");
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Box style={{ marginTop: 40, marginHorizontal: 10 }}>
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
    </SafeAreaView>
  );
};

export default SecondaryLayout;
