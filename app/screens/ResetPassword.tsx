import ShowAndHidePassword from "@/components/common/ShowAndHidePassword";
import Form from "@/components/utils/Form";
import React, { useState } from "react";
import SecondaryLayout from "../layouts/SecondaryLayout";

interface ResetPassword {
  password: string;
  "re-password": string;
}

const ResetPassword = () => {
  const [showRePass, setReShowPass] = useState(false);
  const [showPass, setShowPass] = useState(false);

  async function handleSubmit(data: ResetPassword) {}

  return (
    <SecondaryLayout title='Change Password'>
      <Form
        style={{ marginTop: 30 }}
        inputs={[
          {
            label: "New Password",
            name: "password",
            placeholder: "New Password",
            secureTextEntry: true,
            required: true,
            JSXElement: (
              <ShowAndHidePassword
                setShowSecure={setShowPass}
                showSecure={showPass}
              />
            ),
          },
          {
            label: "Confirm Password",
            name: "re-password",
            placeholder: "Confirm Password",
            secureTextEntry: true,
            required: true,
            JSXElement: (
              <ShowAndHidePassword
                setShowSecure={setReShowPass}
                showSecure={showRePass}
              />
            ),
          },
        ]}
        onSubmit={(data) => handleSubmit(data)}
        butnText='submit'
      />
    </SecondaryLayout>
  );
};

export default ResetPassword;
