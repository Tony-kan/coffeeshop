import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

/**
 * SignIn Screen
 *
 * This component renders the SignIn screen.
 * includes Apple and Google Login
 * @returns A React component that displays the SignIn Screen.
 */

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onPressAppleButton = () => {
    console.log("clicked apple auth");
  };
  const onPressGoogleButton = () => {
    console.log("clicked google auth");
  };

  const onSignIn = () => {};
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerClassName="h-full">
        <View className="mt-6">
          {/* Top section,title,subtile : welcoming text,Apple and Google buttons */}
          <View className="flex justify-center items-start gap-4 mx-4 mt-4">
            <Text className="font-sora-semiBold text-2xl">Welcome Again ,</Text>
            <Text className="font-sora-bold text-xl">Sign In </Text>
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
            <CustomButton title="Sign In" onPress={onSignIn} className="mt-6" />
          </View>

          {/* dont have account */}
          <View className="flex">
            <Link href="/sign-up" className="text-lg text-center mt-10">
              <Text>Don't have an Account ? </Text>
              <Text className="text-primary-300">Sign Up</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
