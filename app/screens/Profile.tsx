import RippleButton from "@/components/utils/Button";
import Form from "@/components/utils/Form";
import { Typography } from "@/components/utils/Typography";
import http from "@/config/http";
import useStore from "@/hooks/useStore";
import { useThemeColor } from "@/hooks/useThemeColor";
import { User } from "@/store/store-type";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import SecondaryLayout from "../layouts/SecondaryLayout";

const Profile = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [showCountryCode, setShowCountryCode] = useState(false);
  const placeHolderColor = useThemeColor("placeholder");
  const [showDate, setShowDate] = useState(false);
  const store = useStore();
  const [code, setCode] = useState(store?.user?.country_code ?? "+91");
  const [date, setDate] = useState<Date>(() => {
    const dob = store?.user?.dob;
    return dob ? new Date(dob) : new Date();
  });

  async function handleSubmit(data: User) {
    try {
      data.country_code = code;
      await http.put("/auth/update", data);
      store?.setToastMessage({
        title: "Success",
        description: "Profile updated successfully",
      });
    } catch (error: any) {
      store?.setToastMessage({ title: "Failed", description: error.message });
    }
  }

  const DateOfBirthElement = () => {
    return (
      <>
        {showDate && (
          <DateTimePicker
            value={date}
            mode='date'
            display='calendar'
            onChange={(_, selectedDate) => {
              if (selectedDate) setDate(selectedDate);
              setShowDate(false);
            }}
          />
        )}
        <Pressable
          onPress={() => setShowDate(true)}
          style={{ position: "absolute", right: 10, top: 12 }}
        >
          <MaterialCommunityIcons
            name='calendar-month-outline'
            size={24}
            color={placeHolderColor}
          />
        </Pressable>
      </>
    );
  };

  const CountryCodeElement = () => {
    return (
      <>
        <CountryPicker
          show={showCountryCode}
          pickerButtonOnPress={(item) => {
            setCode(item.dial_code);
            setShowCountryCode(false);
          }}
          popularCountries={["US", "UA", "PL"]}
          lang={""}
        />

        <Pressable
          style={{ position: "absolute", left: 0, top: 10 }}
          onPress={() => setShowCountryCode(true)}
        >
          <Typography>{code}</Typography>
        </Pressable>
      </>
    );
  };

  return (
    <SecondaryLayout title='Profile'>
      <Form
        style={{ marginTop: 10, marginBottom: 20 }}
        onSubmit={handleSubmit}
        bottomBorder={true}
        dependancy={showDate}
        inputs={[
          {
            label: "First Name",
            name: "first_name",
            placeholder: "Enter first name",
            value: store?.user?.first_name,
          },
          {
            label: "Last Name",
            name: "last_name",
            placeholder: "Enter last name",
            value: store?.user?.last_name,
          },
          {
            label: "Date of Birth",
            name: "dob",
            placeholder: "Enter date of birth",
            value: date.toLocaleDateString(),
            JSXElement: <DateOfBirthElement />,
            disabled: true,
          },
          {
            label: "Sex",
            name: "sex",
            placeholder: "Select the sex",
            value: store?.user?.sex,
            variant: { type: "select", options: ["Male", "Female"] },
          },
          {
            label: "Profession",
            name: "profession",
            placeholder: "Select your profession",
            value: store?.user?.profession,
            variant: { type: "select", options: ["Doctor", "Nurse"] },
          },
          {
            label: "Email Id",
            name: "email",
            placeholder: "Email Id",
            value: store?.user?.email,
            disabled: true,
          },
          {
            label: "Mobile no.",
            name: "mobile",
            placeholder: "Enter mobile no.",
            value: store?.user?.mobile,
            JSXElement: <CountryCodeElement />,
            style: { paddingLeft: 40 },
            keyboardType: "number-pad",
          },
          {
            label: "City",
            name: "city",
            placeholder: "Enter city",
            value: store?.user?.city,
          },
          {
            label: "Medical Council",
            name: "address",
            placeholder: "Enter medical council",
            value: store?.user?.address,
          },
        ]}
        ExtraBtn={
          <RippleButton
            onPress={() => navigation.goBack()}
            variant='outline'
            style={{ width: "auto", flex: 1 }}
          >
            <Typography color='primary'>Cancel</Typography>
          </RippleButton>
        }
      />
    </SecondaryLayout>
  );
};

export default Profile;
