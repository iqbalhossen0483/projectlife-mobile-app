import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import Pragnent from "../icons/Pragnent";
import RippleButton from "../utils/Button";
import Card from "../utils/Card";
import { Typography } from "../utils/Typography";

const data = [
  {
    score: "80",
    title: "MHR",
    color: "success",
  },
  {
    score: "200/75",
    title: "BP",
    color: "error",
  },
  {
    score: "140",
    title: "FHR",
    color: "success",
  },
  {
    score: "90",
    title: "Celsius Temp ",
    color: "success",
  },
  {
    score: "4",
    title: "UC",
    color: "success",
  },
];

const PatientCard = () => {
  const placeholderColor = useThemeColor("placeholder");
  const grayColor = useThemeColor("lightGray");
  const primaryColor = useThemeColor("primary");
  const borderColor = useThemeColor("border");
  const primaryLight = useThemeColor("primary-light");

  return (
    <Card>
      <View style={{ width: "100%", gap: 5 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ fontWeight: 500, fontSize: 18 }}>
            Dipti Thakur
          </Typography>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name='flag-sharp' size={18} color={placeholderColor} />
            <MaterialCommunityIcons
              name='dots-vertical'
              size={24}
              color={placeholderColor}
            />
          </View>
        </View>
        <Typography style={{ fontSize: 14, fontWeight: 500 }}>
          Age:{" "}
          <Typography style={{ fontSize: 14 }} color='textSeconday'>
            30 y
          </Typography>
        </Typography>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Typography style={{ fontSize: 14, fontWeight: 500 }}>
            UHID:{" "}
            <Typography style={{ fontSize: 14 }} color='textSeconday'>
              LCG0025
            </Typography>
          </Typography>
          <Typography style={{ fontSize: 14, fontWeight: 500 }}>
            Obstetric Formula:
            <Typography style={{ fontSize: 14 }} color='textSeconday'>
              {" "}
              G3 P2 L2 A0
            </Typography>
          </Typography>
        </View>
        <Typography style={{ fontSize: 14, fontWeight: 500 }}>
          Ward Name:
          <Typography style={{ fontSize: 14 }} color='textSeconday'>
            {" "}
            Maternity Ward 1
          </Typography>
        </Typography>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Pragnent />
            <Typography style={{ fontWeight: 500 }}>
              Delivery Status:
            </Typography>
          </View>
          <Typography color='textSeconday' style={{ fontWeight: 500 }}>
            Not Started
          </Typography>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 5,
            backgroundColor: grayColor,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingTop: 10,
            paddingBottom: 15,
            borderWidth: 1,
            borderColor: borderColor,
            marginTop: 10,
          }}
        >
          {data.map((item, i) => (
            <View key={i} style={{ alignItems: "center" }}>
              <Typography
                color={item.color as any}
                style={{ fontWeight: 500, fontSize: 17 }}
              >
                {item.score}
              </Typography>
              <Typography
                color='textBlue'
                style={{ fontWeight: 500, fontSize: 17 }}
              >
                {item.title}
              </Typography>
            </View>
          ))}
        </View>
        <RippleButton
          variant='outline'
          ripple={false}
          style={{
            width: 120,
            height: "auto",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginTop: -15,
            backgroundColor: primaryLight,
          }}
        >
          <Typography color='primary'>View LCG </Typography>
          <MaterialCommunityIcons
            name='chevron-double-right'
            size={20}
            color={primaryColor}
          />
        </RippleButton>

        <RippleButton
          style={{
            width: "auto",
            height: "auto",
            paddingVertical: 7,
            borderRadius: 12,
            marginTop: 10,
          }}
        >
          <Typography color='white'>Add Plan</Typography>
        </RippleButton>
      </View>
    </Card>
  );
};

export default PatientCard;
