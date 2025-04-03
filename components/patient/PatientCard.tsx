import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, StyleSheet, TouchableHighlight, View } from "react-native";
import BottomModal from "../common/BottomModal";
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
  const [isVisible, setIsVisible] = useState(false);
  const placeholderColor = useThemeColor("placeholder");
  const grayColor = useThemeColor("lightGray");
  const primaryColor = useThemeColor("primary");
  const borderColor = useThemeColor("border");
  const primaryLight = useThemeColor("primary-light");

  return (
    <Card>
      <View style={{ width: "100%", gap: 5 }}>
        <View style={styles.header}>
          <Typography style={{ fontWeight: 500, fontSize: 18 }}>
            Dipti Thakur
          </Typography>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name='flag-sharp' size={18} color={placeholderColor} />
            <Pressable onPress={() => setIsVisible(true)}>
              <MaterialCommunityIcons
                name='dots-vertical'
                size={24}
                color={placeholderColor}
              />
            </Pressable>
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
          style={[
            styles.analysisWrapper,
            { backgroundColor: grayColor, borderColor: borderColor },
          ]}
        >
          {data.map((item, i) => (
            <View key={i} style={{ alignItems: "center" }}>
              <Typography
                color={item.color as any}
                style={{ fontWeight: 500, fontSize: 17 }}
              >
                {item.score}
              </Typography>
              <Typography color='textBlue' style={{ fontWeight: 500 }}>
                {item.title}
              </Typography>
            </View>
          ))}
        </View>
        <RippleButton
          variant='outline'
          ripple={false}
          style={{ ...styles.viewLgcBtn, backgroundColor: primaryLight }}
        >
          <Typography color='primary' style={{ fontSize: 14 }}>
            View LCG
          </Typography>
          <MaterialCommunityIcons
            name='chevron-double-right'
            size={20}
            color={primaryColor}
          />
        </RippleButton>

        <RippleButton style={styles.addBtn}>
          <Typography color='white'>Add Plan</Typography>
        </RippleButton>
      </View>
      <Menus isVisible={isVisible} setIsVisible={setIsVisible} />
    </Card>
  );
};

const menus = [
  {
    title: "Assign Ward",
    Icon: (
      <Image
        style={{ height: 24, width: 24 }}
        source={require("../../assets/icons/patients.svg")}
      />
    ),
  },
  {
    title: "Patient Actions",
    Icon: (
      <Image
        style={{ height: 24, width: 24 }}
        source={require("../../assets/icons/medical-records.svg")}
      />
    ),
  },
  {
    title: "Edit Patient Details",
    Icon: (
      <Image
        style={{ height: 24, width: 24 }}
        source={require("../../assets/icons/edit.svg")}
      />
    ),
  },
];

interface Props {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menus({ isVisible, setIsVisible }: Props) {
  const primaryLight = useThemeColor("primary-light");

  function handleClose() {
    setIsVisible(false);
  }
  return (
    <BottomModal isVisible={isVisible} handleClose={handleClose}>
      <View style={{ marginTop: 10 }}>
        {menus.map((item, i) => (
          <TouchableHighlight
            onPress={() => console.log("clicked")}
            underlayColor={primaryLight}
            key={i}
          >
            <View style={styles.menu}>
              {item.Icon}
              <Typography>{item.title}</Typography>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </BottomModal>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  analysisWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 15,
    borderWidth: 1,
    marginTop: 10,
  },
  viewLgcBtn: {
    width: 120,
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: -15,
  },
  addBtn: {
    width: "auto",
    height: "auto",
    paddingVertical: 7,
    borderRadius: 12,
    marginTop: 10,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default PatientCard;
