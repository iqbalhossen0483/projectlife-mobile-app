import { useThemeColor } from "@/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import RippleButton from "../utils/Button";
import Card from "../utils/Card";
import InputBox from "../utils/InputBox";
import Select from "../utils/Select";
import { Typography } from "../utils/Typography";

interface Props {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const SearchAndFilter = ({ value, onChange }: Props) => {
  const placeholderColor = useThemeColor("placeholder");
  const primaryColor = useThemeColor("primary");
  const [isVisible, setIsVisible] = useState(false);
  const [sortBy, setSortBy] = useState("Patient Name");

  function handleCloseModal() {
    setIsVisible(false);
  }

  function handleSort() {}

  return (
    <View style={styles.container}>
      <Card style={styles.searchBox}>
        <View style={{ width: "100%", position: "relative" }}>
          <InputBox
            placeholder='Search Patient'
            value={value}
            style={{
              borderWidth: 0,
              width: "100%",
              height: "auto",
              paddingLeft: 35,
            }}
            onChangeText={onChange}
          />
          <Ionicons
            style={styles.searchIcon}
            name='search'
            size={24}
            color={placeholderColor}
          />
        </View>
      </Card>
      <Pressable onPress={() => setIsVisible(true)}>
        <Card style={{ paddingVertical: 12 }}>
          <Image
            style={{ height: 16, width: 27 }}
            source={require("../../assets/icons/filter.svg")}
          />
        </Card>
      </Pressable>

      <Modal
        isVisible={isVisible}
        onBackButtonPress={handleCloseModal}
        onBackdropPress={handleCloseModal}
        animationIn='slideInUp'
        animationOut='slideOutDown'
        style={{ margin: 0 }}
      >
        <View style={{ flex: 1 }}>
          <Card style={styles.modalCard}>
            <RippleButton
              style={styles.modalCloseIcon}
              variant='text'
              bgColor='placeholder'
              onPress={handleCloseModal}
            >
              <Ionicons
                name='close-outline'
                size={24}
                color={placeholderColor}
              />
            </RippleButton>
            <View style={{ width: "100%", marginTop: 10 }}>
              <Typography
                style={{ fontWeight: 500, fontSize: 18, textAlign: "left" }}
              >
                Sort By
              </Typography>

              <View style={{ marginVertical: 20, marginLeft: 10 }}>
                <Select
                  options={["Patient Name", "UHID"]}
                  value={sortBy}
                  onChange={setSortBy}
                  direction='column'
                />
              </View>

              <View style={{ flexDirection: "row" }}>
                <RippleButton
                  style={{
                    flex: 1,
                    borderRadius: 0,
                    borderColor: primaryColor,
                  }}
                  onPress={() => setSortBy("Patient Name")}
                  variant='outline'
                  bgColor='primary-light'
                >
                  <Typography color='primary'>Reset</Typography>
                </RippleButton>
                <RippleButton
                  onPress={handleSort}
                  style={{ flex: 1, borderRadius: 0 }}
                >
                  <Typography color='white'>Apply</Typography>
                </RippleButton>
              </View>
            </View>
          </Card>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  searchBox: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  searchIcon: {
    position: "absolute",
    left: 5,
    top: "50%",
    transform: [{ translateY: "-50%" }],
  },
  modalCard: {
    height: 200,
    marginTop: "auto",
    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
    position: "relative",
  },
  modalCloseIcon: {
    width: "auto",
    height: "auto",
    borderRadius: 100,
    position: "absolute",
    top: 5,
    right: 5,
  },
});

export default SearchAndFilter;
