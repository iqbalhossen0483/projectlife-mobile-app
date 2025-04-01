import { Box } from "@/components/utils/Box";
import useStore from "@/hooks/useStore";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Image } from "expo-image";
import { useFocusEffect, useNavigation } from "expo-router";
import React, { useCallback } from "react";
import { Dimensions } from "react-native";
import SecondaryLayout from "../layouts/SecondaryLayout";
import routes from "../Routes/routes";

const Loading = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const store = useStore();

  useFocusEffect(
    useCallback(() => {
      if (store?.userLoading) return;

      if (store?.user) {
        navigation.navigate(routes.profile_layout);
      } else {
        navigation.navigate(routes.login);
      }
    }, [store?.userLoading, store?.user])
  );

  return (
    <SecondaryLayout header={false}>
      <Box
        style={{
          flex: 1,
          height: Dimensions.get("window").height,
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            padding: 0,
          }}
          contentFit='contain'
          source={require("../../assets/images/splash-screen.svg")}
        />
      </Box>
    </SecondaryLayout>
  );
};

export default Loading;
