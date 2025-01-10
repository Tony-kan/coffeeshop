import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { InputFieldProps } from "@/types/type";
import { icons } from "@/constants";

// Todo: further refine the input field to show colors when clicked

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  placeholder,
  ...props
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleEyeIconPress = () => {
    setShowPassword(!showPassword);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-sora-semiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row px-5 justify-start items-center relative rounded-lg border-2 focus:border-primary-300 ${containerStyle}`}
          >
            {icon && <Image source={icon} className={`size-6 ${iconStyle}`} />}
            <TextInput
              className={`rounded-lg p-4 font-sora-light text-[16px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry && !showPassword}
              placeholder={placeholder}
            />
            {secureTextEntry && (
              <TouchableWithoutFeedback onPress={handleEyeIconPress}>
                <Image
                  source={showPassword ? icons.eyeCross : icons.eyeOpen}
                  className="size-6"
                  resizeMode="contain"
                />
              </TouchableWithoutFeedback>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
