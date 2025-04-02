import Tabs from "@/components/patient/Tabs";
import { Typography } from "@/components/utils/Typography";
import React, { useState } from "react";
import { View } from "react-native";

const Patients = () => {
  const [tab, setTab] = useState("All Patients");

  return (
    <View>
      <Tabs tab={tab} onChange={setTab} />
      <Typography>Patient</Typography>
    </View>
  );
};

export default Patients;
