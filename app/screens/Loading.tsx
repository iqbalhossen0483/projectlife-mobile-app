import { Box } from "@/components/utils/Box";
import { Image } from "expo-image";
import React from "react";
import SecondaryLayout from "../layouts/SecondaryLayout";

const Loading = () => {
  return (
    <SecondaryLayout header={false}>
      <Box>
        <Image
          style={{ height: "100%", width: "100%" }}
          contentFit='contain'
          source={require("../../assets/images/splash-screen.svg")}
        />
      </Box>
    </SecondaryLayout>
  );
};

export default Loading;
