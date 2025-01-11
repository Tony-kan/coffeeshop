import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onPressAppleButton = () => {
    console.log("clicked apple auth");
  };
  const onPressGoogleButton = () => {
    console.log("clicked google auth");
  };

  const onSignUp = () => {};
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerClassName="h-full flex justify-center">
        <View className="mt-2">
          {/* Top section,title,subtile : welcoming text,Apple and Google buttons */}
          <View className="flex justify-center items-start gap-7 mx-4 mt-w">
            <Text className="font-sora-extraBold text-3xl">Get Started , </Text>
            <Text className="font-sora-bold text-2xl">Create Account </Text>
            <View className="flex flex-row mt-4 justify-center items-center gap-2">
              <TouchableOpacity
                onPress={onPressAppleButton}
                className="bg-primary-300 w-1/2 flex flex-row justify-center items-center gap-2 h-14 rounded-lg"
              >
                <Image
                  source={icons.apple}
                  resizeMode="contain"
                  className="size-6"
                />
                <Text className="text-white font-sora-extraBold text-lg">
                  Apple
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onPressGoogleButton}
                className="bg-primary-300 w-1/2 flex flex-row justify-center items-center gap-2 h-14 rounded-lg"
              >
                <Image
                  source={icons.google}
                  resizeMode="contain"
                  className="size-6"
                />
                <Text className="text-white font-sora-extraBold  text-lg">
                  Google
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* username/email ,password form */}
          <View className="p-5">
            <InputField
              label="name"
              placeholder="Enter Your Full Name"
              icon={icons.user}
              value={form.name}
              onChangeText={(value) => setForm({ ...form, name: value })}
            />
            <InputField
              label="Email"
              placeholder="Enter Your Email"
              icon={icons.email}
              value={form.email}
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
            <InputField
              label="Password"
              placeholder="Enter Your Password"
              icon={icons.lock}
              value={form.password}
              secureTextEntry={true}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />
            <CustomButton
              title="Register"
              onPress={onSignUp}
              className="mt-6"
            />
          </View>

          {/* dont have account */}
          <View className="flex">
            <Link
              href="/sign-in"
              className="text-xl font-sora text-center mt-10 "
            >
              <Text>Already have an Account ? </Text>
              <Text className="text-primary-300"> Login</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
