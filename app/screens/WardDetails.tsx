import PatientCard from "@/components/patient/PatientCard";
import SearchAndFilter from "@/components/patient/SearchAndFilter";
import Tabs from "@/components/patient/Tabs";
import { Typography } from "@/components/utils/Typography";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { Pressable } from "react-native-gesture-handler";
import SecondaryLayout from "../layouts/SecondaryLayout";

type RouteParams = {
  params: {
    title: string;
  };
};

const WardDetails = () => {
  const [tab, setTab] = useState("All Patients");
  const [value, setValue] = useState("");
  const route = useRoute<RouteProp<RouteParams, "params">>();
  const [sortBy, setSortBy] = useState("Patient Name");

  return (
    <SecondaryLayout
      style={{ padding: 0 }}
      bgColor='backDrop'
      title={route.params.title}
    >
      <Tabs tab={tab} onChange={(value) => setTab(value)} />

      <View style={{ padding: 10, gap: 10 }}>
        <SearchAndFilter
          sortBy={sortBy}
          setSortBy={setSortBy}
          value={value}
          onChange={(value) => setValue(value)}
        />
        <Pressable onPress={() => setSortBy("Patient Name")}>
          <Typography style={{ textAlign: "right" }} color='primary'>
            Clear Filter
          </Typography>
        </Pressable>
        {Array.from({ length: 10 }).map((_, index) => (
          <PatientCard key={index} />
        ))}
      </View>
    </SecondaryLayout>
  );
};
export default WardDetails;
