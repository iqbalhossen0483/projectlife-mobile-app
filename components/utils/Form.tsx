import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import { View } from "react-native";
import RippleButton from "./Button";
import DropDown from "./Dropdown";
import InputBox from "./InputBox";
import { Typography } from "./Typography";

type FormInput = {
  name: string;
  placeholder: string;
  value?: string;
  secureTextEntry?: boolean;
  error?: string;
  required?: boolean;
  options?: { label: string; value: string }[]; // Add options for dropdowns
};

type FormProps = {
  inputs: FormInput[];
  onSubmit: (formData: Record<string, string>) => void;
  title?: string;
};

const Form = ({ inputs, onSubmit, title }: FormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initialData: Record<string, string> = {};
    inputs.forEach((input) => {
      initialData[input.name] = input.value || "";
    });
    return initialData;
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const borderColor = useThemeColor("border");
  const placeholderColor = useThemeColor("placeholder");
  const errorColor = useThemeColor("error");

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    inputs.forEach((input) => {
      if (input.required && !formData[input.name]) {
        newErrors[input.name] = `${input.placeholder} is required`;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // If no errors, form is valid
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <View
      style={{
        borderColor,
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
      }}
    >
      <Typography type='subtitle'>{title}</Typography>
      {inputs.map((input) => (
        <View key={input.name}>
          {input.options ? (
            <DropDown
              data={input.options}
              placeholder={input.placeholder}
              setData={(value) => handleChange(input.name, value)}
            />
          ) : (
            <InputBox
              style={{
                borderColor: errors[input.name] ? errorColor : borderColor,
              }}
              placeholder={input.placeholder}
              placeholderTextColor={placeholderColor}
              secureTextEntry={input.secureTextEntry}
              value={formData[input.name]}
              onChangeText={(value) => handleChange(input.name, value)}
            />
          )}
          {errors[input.name] && (
            <Typography style={{ color: errorColor, fontSize: 12 }}>
              {errors[input.name]}
            </Typography>
          )}
        </View>
      ))}
      <RippleButton style={{ marginTop: 10 }} onPress={handleSubmit}>
        <Typography>Submit</Typography>
      </RippleButton>
    </View>
  );
};

export default Form;
