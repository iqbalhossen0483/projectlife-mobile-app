import Form from "@/components/utils/Form";
import useStore from "@/hooks/useStore";
import React from "react";
import SecondaryLayout from "../layouts/SecondaryLayout";

const Profile = () => {
  const store = useStore();

  async function handleSubmit(data: any) {}

  return (
    <SecondaryLayout title='Profile'>
      <Form
        style={{ marginTop: 10, marginBottom: 20 }}
        onSubmit={handleSubmit}
        bottomBorder
        inputs={[
          {
            label: "First Name",
            name: "first_name",
            placeholder: "First Name",
            value: store?.user?.first_name,
          },
          {
            label: "Last Name",
            name: "last",
            placeholder: "Last Name",
            value: store?.user?.last_name,
          },
          {
            label: "Date of Birth",
            name: "dob",
            placeholder: "Date of Birth",
            value: store?.user?.dob,
          },
          {
            label: "Sex",
            name: "sex",
            placeholder: "Sex",
            value: store?.user?.sex,
          },
          {
            label: "Profession",
            name: "profession",
            placeholder: "Profession",
            value: store?.user?.profession,
          },
          {
            label: "Email Id",
            name: "email",
            placeholder: "Email Id",
            value: store?.user?.email,
          },
          {
            label: "Mobile no.",
            name: "mobile",
            placeholder: "Mobile no.",
            value: store?.user?.mobile,
          },
          {
            label: "City",
            name: "city",
            placeholder: "City",
            value: store?.user?.city,
          },
          {
            label: "Medical Council",
            name: "address",
            placeholder: "Medical Council",
            value: store?.user?.address,
          },
        ]}
      />
    </SecondaryLayout>
  );
};

export default Profile;
