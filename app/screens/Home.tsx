import Card from "@/components/utils/Card";
import { Typography } from "@/components/utils/Typography";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

const data = [
  {
    _id: 1,
    patients: 3,
    type: "Labouring Patients",
  },
  {
    _id: 2,
    patients: 25,
    type: "High Risk Patients",
  },
  {
    _id: 3,
    patients: 50,
    type: "Vaginal Deliveries",
  },
  {
    _id: 4,
    patients: 25,
    type: "Surgical Deliveries",
  },
];

const Home = () => {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
      <Typography style={{ fontWeight: 500, fontSize: 18 }}>
        Welcome! Riya Bhardwaj
      </Typography>

      <View style={{ gap: 15, marginTop: 20 }}>
        {data.map((item) => (
          <Card
            style={{ width: "80%", marginHorizontal: "auto" }}
            key={item._id}
          >
            <View style={{ width: "100%" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  color='primary'
                  style={{ fontWeight: 600, fontSize: 20 }}
                >
                  {item.patients}
                </Typography>
                <Image
                  style={{ height: 38, width: 38 }}
                  source={require("../../assets/images/patient-home.svg")}
                />
              </View>
              <Typography style={{ fontWeight: 500 }}>{item.type}</Typography>
            </View>
          </Card>
        ))}
      </View>
    </View>
  );
};

export default Home;
