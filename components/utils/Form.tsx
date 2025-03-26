import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import { View, ViewStyle } from "react-native";
import { Box } from "./Box";
import RippleButton from "./Button";
import DropDown from "./Dropdown";
import InputBox from "./InputBox";
import { Typography } from "./Typography";

type FormInput = {
  name: string;
  label: string;
  placeholder: string;
  value?: string;
  secureTextEntry?: boolean;
  error?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
  JSXElement?: React.JSX.Element;
};

type FormProps = {
  inputs: FormInput[];
  onSubmit: (formData: Record<string, string>) => void;
  title?: string;
  butnText?: string;
  style?: ViewStyle;
};

const Form = ({ inputs, onSubmit, title, butnText, style }: FormProps) => {
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
        newErrors[input.name] = `${input.label} is required`;
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
    <Box style={style}>
      <Typography style={{ marginBottom: 30 }} color='primary' type='subtitle'>
        {title}
      </Typography>
      <Box style={{ rowGap: 15 }}>
        {inputs.map((input) => (
          <View key={input.name}>
            <Typography style={{ fontWeight: 500, marginBottom: 3 }}>
              {input.label}
            </Typography>
            {input.options ? (
              <DropDown
                data={input.options}
                placeholder={input.placeholder}
                setData={(value) => handleChange(input.name, value)}
              />
            ) : (
              <Box style={{ position: "relative" }}>
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
                {input.JSXElement ? input.JSXElement : null}
              </Box>
            )}

            {errors[input.name] && (
              <Typography style={{ color: errorColor, fontSize: 12 }}>
                {errors[input.name]}
              </Typography>
            )}
          </View>
        ))}
        <RippleButton
          style={{ marginTop: 10, width: "auto" }}
          onPress={handleSubmit}
        >
          <Typography color='white' style={{ fontWeight: 600 }}>
            {butnText ? butnText : "Submit"}
          </Typography>
        </RippleButton>
      </Box>
    </Box>
  );
};

export default Form;
