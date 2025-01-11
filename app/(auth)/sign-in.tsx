import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link, Redirect } from "expo-router";
import { useGlobalContext } from "@/context/global-provider";
import { useSupabase } from "@/lib/useSupabase";
import { signIn } from "@/lib/supabase";

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

  // const { refetch, loading, isLoggedIn } = useGlobalContext();

  // if (!loading && isLoggedIn) return <Redirect href="/" />;
  const onPressAppleButton = () => {
    console.log("clicked apple auth");
  };
  const onPressGoogleButton = () => {
    console.log("clicked google auth");
  };

  const onSignIn = async () => {
    await signIn(form.email, form.password);
    // const { data: user, refetch } = useSupabase({
    //   fn: signIn,
    //   params: { ...form },
    // });
  };
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerClassName="h-full flex justify-center">
        <View className="mt-2">
          {/* Top section,title,subtile : welcoming text,Apple and Google buttons */}
          <View className="flex justify-center items-start gap-7 mx-4 mt-w">
            <Text className="font-sora-extraBold text-3xl">
              Welcome Again ,
            </Text>
            <Text className="font-sora-bold text-2xl"> Login </Text>
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
            <CustomButton title="Login" onPress={onSignIn} className="mt-6" />
          </View>

          {/* dont have account */}
          <View className="flex">
            <Link
              href="/sign-up"
              className="text-xl font-sora text-center mt-10 "
            >
              <Text>Don't have an Account ? </Text>
              <Text className="text-primary-300"> Register</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
