import routes from "@/app/Routes/routes";
import useStore from "@/hooks/useStore";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import BottomModal from "../common/BottomModal";
import MiddleModal from "../common/MiddleModal";
import Pragnent from "../icons/Pragnent";
import RippleButton from "../utils/Button";
import Card from "../utils/Card";
import CheckBox from "../utils/CheckBox";
import Link from "../utils/Link";
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
  const [showMenus, setShowMenus] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const placeholderColor = useThemeColor("placeholder");
  const grayColor = useThemeColor("lightGray");
  const primaryColor = useThemeColor("primary");
  const borderColor = useThemeColor("border");
  const primaryLight = useThemeColor("primary-light");
  const store = useStore();

  async function handleAlert() {
    const alert = await AsyncStorage.getItem("show_patient_risk_alert");
    if (alert === "true") {
      setShowAlert(true);
      return;
    }
    store?.setToastMessage({
      type: "success",
      message: "Patient added to as risk",
    });
  }

  function handAddRisk() {
    if (showAlert) setShowAlert(false);
  }

  return (
    <Card>
      <View style={{ width: "100%", gap: 5 }}>
        <View style={styles.header}>
          <Typography style={{ fontWeight: 500, fontSize: 18 }}>
            Dipti Thakur
          </Typography>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable onPress={handleAlert}>
              <Ionicons name='flag-sharp' size={18} color={placeholderColor} />
            </Pressable>
            <Pressable onPress={() => setShowMenus(true)}>
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
      <Menus isVisible={showMenus} cardId='1' setIsVisible={setShowMenus} />
      <Alert
        isVisible={showAlert}
        setIsVisible={setShowAlert}
        onSucess={handAddRisk}
      />
    </Card>
  );
};

const menus = [
  {
    title: "Assign Ward",
    route: routes.assign_ward,
    Icon: (
      <Image
        style={{ height: 24, width: 24 }}
        source={require("../../assets/icons/patients.svg")}
      />
    ),
  },
  {
    title: "Patient Actions",
    route: routes.assign_ward,
    Icon: (
      <Image
        style={{ height: 24, width: 24 }}
        source={require("../../assets/icons/medical-records.svg")}
      />
    ),
  },
  {
    title: "Edit Patient Details",
    route: routes.assign_ward,
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
  cardId?: string;
  onSucess?: () => void;
}

function Menus({ isVisible, setIsVisible, cardId }: Props) {
  function handleClose() {
    setIsVisible(false);
  }

  return (
    <BottomModal isVisible={isVisible} handleClose={handleClose}>
      <View style={{ marginTop: 10 }}>
        {menus.map((item, i) => (
          <Link
            onPress={handleClose}
            href={item.route as any}
            params={{ cardId }}
            key={i}
          >
            <View style={styles.menu}>
              {item.Icon}
              <Typography>{item.title}</Typography>
            </View>
          </Link>
        ))}
      </View>
    </BottomModal>
  );
}

function Alert({ isVisible, setIsVisible, onSucess }: Props) {
  const [checked, setChecked] = useState(false);
  function handleClose() {
    setIsVisible(false);
  }

  async function handleCheck(value: boolean) {
    setChecked(value);
    AsyncStorage.setItem("show_patient_risk_alert", `${value}`);
  }

  return (
    <MiddleModal
      animationIn='wobble'
      isVisible={isVisible}
      handleClose={handleClose}
    >
      <View style={{ alignItems: "center", gap: 20 }}>
        <Image
          style={{ height: 32, width: 37 }}
          source={require("../../assets/icons/alert.svg")}
        />
        <Typography
          style={{ fontSize: 20, fontWeight: 500, textAlign: "center" }}
        >
          Are you sure to mark this patient at high risk?
        </Typography>

        <CheckBox checked={checked} onChange={handleCheck}>
          <Typography style={{ fontSize: 18, fontWeight: 500 }}>
            Hide this alert in future
          </Typography>
        </CheckBox>
        <View
          style={{ flexDirection: "row", alignItems: "center", gap: "10%" }}
        >
          <RippleButton
            onPress={handleClose}
            style={{ flex: 1 }}
            variant='outline'
          >
            <Typography color='primary'>No</Typography>
          </RippleButton>
          <RippleButton onPress={onSucess} style={{ flex: 1 }}>
            <Typography color='white'>Yes</Typography>
          </RippleButton>
        </View>
      </View>
    </MiddleModal>
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
