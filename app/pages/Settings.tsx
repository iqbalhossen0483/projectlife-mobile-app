import React, { useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { Box } from "@/components/utils/Box";
import Button from "@/components/utils/Button";
import Card from "@/components/utils/Card";
import DropDown from "@/components/utils/Dropdown";
import Form from "@/components/utils/Form";
import InputBox from "@/components/utils/InputBox";
import { Typography } from "@/components/utils/Typography";
import Toast from "react-native-toast-message";

export default function Settings() {
  const [selected, setSelected] = useState("");
  const [text, setText] = useState("");
  const data = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleFormSubmit = (formData: Record<string, string>) => {
    Toast.show({
      type: "success",
      text1: "Hello!",
      text2: "This is a toast message.",
    });
    console.log("Form Data:", formData);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={styles.scrollViewContent}
      >
        <Box style={styles.container}>
          <Typography type='title'>This is Setting page</Typography>
          <Typography type='subtitle'>You can navigate from here</Typography>
          <Typography>And access your setting pages</Typography>

          <Card style={{ marginVertical: 20 }}>
            <Typography type='subtitle'>This is Card</Typography>
            <Typography>You can use it for your own</Typography>
          </Card>

          <Box style={{ gap: 5 }}>
            <Button href='Home'>
              <Typography>Home</Typography>
            </Button>
            <Button variant='outline' href='Explore'>
              <Typography>Explore</Typography>
            </Button>
            <Button href='Profile'>
              <Typography>Profile</Typography>
            </Button>

            <Typography>Dropdown</Typography>
            <DropDown data={data} setData={setSelected} />

            <Typography>Input Box</Typography>
            <InputBox value={text} onChangeText={setText} />

            <Typography>Form</Typography>
            <Form
              title='User Form'
              inputs={[
                {
                  name: "username",
                  placeholder: "Enter your username",
                  required: true,
                },
                {
                  name: "password",
                  placeholder: "Enter your password",
                  secureTextEntry: true,
                  required: true,
                },
                {
                  name: "role",
                  placeholder: "Select your role",
                  required: true,
                  options: [
                    { label: "Admin", value: "admin" },
                    { label: "Moderator", value: "moderator" },
                    { label: "User", value: "user" },
                  ],
                },
              ]}
              onSubmit={(formData) => console.log("Submitted Data:", formData)}
            />
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    minHeight: Dimensions.get("screen").height - 50,
  },
});
