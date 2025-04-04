import { Box } from "@/components/utils/Box";
import { Typography } from "@/components/utils/Typography";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedToast } from "@/providers/ThemeToast";
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
  bgColor?: keyof typeof Colors.light;
}

const SecondaryLayout = ({
  children,
  header = true,
  title,
  bgColor = "background",
}: Props) => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const backgroundColor = useThemeColor("background");
  const backDropColor = useThemeColor(bgColor);
  const primaryColor = useThemeColor("primary");
  const boderColor = useThemeColor("border");

  return (
    <View
      style={{
        minHeight: Dimensions.get("screen").height - 15,
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
            paddingHorizontal: 10,
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
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps='handled'
          >
            <View
              style={{
                padding: 10,
                backgroundColor: backDropColor,
                height: "100%",
              }}
            >
              {children}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <ThemedToast />
    </View>
  );
};

export default SecondaryLayout;
