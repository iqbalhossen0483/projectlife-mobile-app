import SearchAndFilter from "@/components/patient/SearchAndFilter";
import Card from "@/components/utils/Card";
import { Typography } from "@/components/utils/Typography";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import { View } from "react-native";
import SecondaryLayout from "../layouts/SecondaryLayout";

const data = [
  {
    _id: 1,
    title: "Ward 1",
    description: "No. of Patients: 25",
  },
  {
    _id: 2,
    title: "Ward 2",
    description: "No. of Patients: 15",
  },
  {
    _id: 3,
    title: "Ward 3",
    description: "No. of Patients: 20",
  },
  {
    _id: 4,
    title: "Ward 4",
    description: "No. of Patients: 18",
  },
  {
    _id: 5,
    title: "Ward 5",
    description: "No. of Patients: 32",
  },
];

const Wards = () => {
  const [value, setValue] = useState("");
  const textSecondary = useThemeColor("textSeconday");

  return (
    <SecondaryLayout title='Wards' bgColor='backDrop'>
      <SearchAndFilter
        filter={false}
        value={value}
        onChange={(value) => setValue(value)}
      />
      <View style={{ gap: 10, marginVertical: 10 }}>
        {data.map((item) => (
          <Card style={{ alignItems: "flex-start" }} key={item._id}>
            <Typography style={{ fontWeight: 500 }}>{item.title}</Typography>
            <Typography style={{ color: textSecondary, fontSize: 14 }}>
              {item.description}
            </Typography>
          </Card>
        ))}
      </View>
    </SecondaryLayout>
  );
};

export default Wards;
