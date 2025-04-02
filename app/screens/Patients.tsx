import PatientCard from "@/components/patient/PatientCard";
import SearchAndFilter from "@/components/patient/SearchAndFilter";
import Tabs from "@/components/patient/Tabs";
import { Typography } from "@/components/utils/Typography";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";

const Patients = () => {
  const [searchValue, setSearchValue] = useState("");
  const [tab, setTab] = useState("All Patients");

  return (
    <View>
      <Tabs tab={tab} onChange={setTab} />
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <SearchAndFilter value={searchValue} onChange={setSearchValue} />
        <Typography
          style={{ fontWeight: 500, fontSize: 17, marginVertical: 10 }}
        >
          Total Patients 12
        </Typography>

        <View style={{ gap: 20, paddingBottom: 10 }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <PatientCard key={i} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Patients;
