import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useEffect, useState } from "react";
import { KeyboardTypeOptions, TextStyle, View, ViewStyle } from "react-native";
import { Box } from "./Box";
import RippleButton from "./Button";
import DropDown from "./Dropdown";
import InputBox from "./InputBox";
import Select from "./Select";
import { Typography } from "./Typography";

type DropDownOption = { label: string; value: string }[];

type FormInput = {
  name: string;
  label: string;
  placeholder: string;
  value?: string;
  secureTextEntry?: boolean;
  error?: string;
  required?: boolean;
  variant?: {
    type: "drop-down" | "select";
    options: DropDownOption | string[];
  };
  JSXElement?: React.JSX.Element;
  pattern?: { regx: RegExp; message: string };
  disabled?: boolean;
  style?: TextStyle;
  keyboardType?: KeyboardTypeOptions;
};

type FormProps = {
  inputs: FormInput[];
  onSubmit: (formData: any) => Promise<void>;
  title?: string;
  butnText?: string;
  style?: ViewStyle;
  bottomBorder?: boolean;
  dependancy?: boolean;
  ExtraBtn?: React.ReactNode;
};

const Form = ({
  inputs,
  onSubmit,
  title,
  butnText,
  style,
  bottomBorder = false,
  dependancy,
  ExtraBtn,
}: FormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  useEffect(() => {
    const initialData: Record<string, string> = {};
    inputs.forEach((input) => {
      initialData[input.name] = input.value || "";
    });
    setFormData(initialData);
  }, [dependancy]);

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
      } else if (input.pattern) {
        const haveValue = formData[input.name];
        if (haveValue) {
          if (!input.pattern.regx.test(haveValue)) {
            newErrors[input.name] = input.pattern.message;
          }
        }
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // If no errors, form is valid
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (validate()) {
      await onSubmit(formData);
    }
    setIsLoading(false);
  };

  return (
    <Box style={style}>
      {title && (
        <Typography
          style={{ marginBottom: 30 }}
          color='primary'
          type='subtitle'
        >
          {title}
        </Typography>
      )}
      <Box style={{ rowGap: 15 }}>
        {inputs.map((input) => (
          <View key={input.name}>
            <Typography
              color={bottomBorder ? "placeholder" : undefined}
              style={{
                fontWeight: bottomBorder ? undefined : 500,
                marginBottom: bottomBorder ? 0 : 3,
              }}
            >
              {input.label}
            </Typography>
            {input.variant && input.variant.type === "drop-down" ? (
              <DropDown
                data={input.variant.options as DropDownOption}
                placeholder={input.placeholder}
                setData={(value) => handleChange(input.name, value)}
              />
            ) : input.variant && input?.variant.type === "select" ? (
              <Select
                value={formData[input.name]}
                options={input.variant.options as [string]}
                onChange={(value) => handleChange(input.name, value as string)}
              />
            ) : (
              <Box style={{ position: "relative" }}>
                <InputBox
                  style={{
                    borderColor: errors[input.name] ? errorColor : borderColor,
                    ...(bottomBorder && {
                      borderWidth: 0,
                      borderBottomWidth: 1,
                      borderRadius: 0,
                      paddingLeft: 0,
                      paddingHorizontal: 0,
                      height: "auto",
                    }),
                    ...(input.style && input.style),
                  }}
                  readOnly={input.disabled}
                  placeholder={input.placeholder}
                  placeholderTextColor={placeholderColor}
                  secureTextEntry={input.secureTextEntry}
                  value={formData[input.name]}
                  onChangeText={(value) => handleChange(input.name, value)}
                  keyboardType={input.keyboardType}
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
        ))}{" "}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            gap: 20,
          }}
        >
          {ExtraBtn}
          <RippleButton
            style={{ width: "auto", flex: 1 }}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            <Typography color='white' style={{ fontWeight: 600 }}>
              {butnText ? butnText : "Submit"}
            </Typography>
          </RippleButton>
        </View>
      </Box>
    </Box>
  );
};

export default Form;
