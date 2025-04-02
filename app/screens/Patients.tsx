import SearchAndFilter from "@/components/patient/SearchAndFilter";
import Tabs from "@/components/patient/Tabs";
import { Typography } from "@/components/utils/Typography";
import React, { useState } from "react";
import { View } from "react-native";

const Patients = () => {
  const [searchValue, setSearchValue] = useState("");
  const [tab, setTab] = useState("All Patients");

  return (
    <View>
      <Tabs tab={tab} onChange={setTab} />
      <View style={{ paddingHorizontal: 10 }}>
        <SearchAndFilter value={searchValue} onChange={setSearchValue} />
        <Typography>Patient</Typography>
      </View>
    </View>
  );
};

export default Patients;
