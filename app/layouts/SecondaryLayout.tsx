import { Box } from "@/components/utils/Box";
import { Typography } from "@/components/utils/Typography";
import { useThemeColor } from "@/hooks/useThemeColor";
import Entypo from "@expo/vector-icons/Entypo";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface Props {
  children: React.ReactNode;
  header?: boolean;
  title?: string;
}

const SecondaryLayout = ({ children, header = true, title }: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const primaryColor = useThemeColor("primary");
  const boderColor = useThemeColor("border");
  const backgroundColor = useThemeColor("background");

  return (
    <Box
      style={{
        minHeight: Dimensions.get("screen").height - 15,
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
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Entypo
              name='chevron-small-left'
              size={36}
              style={{ color: primaryColor }}
            />
          </Pressable>
          {title && (
            <Typography
              style={{
                flex: 1,
                textAlign: "center",
                fontWeight: 500,
                fontSize: 18,
              }}
            >
              {title}
            </Typography>
          )}
        </Box>
      ) : null}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps='handled'>
            <View>{children}</View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default SecondaryLayout;
