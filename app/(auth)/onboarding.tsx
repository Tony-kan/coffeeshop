import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
/**
 * OnBoarding Screen
 *
 * This component renders the OnBoarding screen.
 *
 * @returns A React component that displays the OnBoarding Screen.
 */
const OnBoarding = () => {
  return (
    <SafeAreaView className="flex bg-black h-full">
      <ScrollView contentContainerClassName="h-full">
        {/* <Image
          source={images.onboarding}
          resizeMode="cover"
          className="w-full h-3/5"
        /> */}
        <View className="relative w-full h-3/5">
          <Image
            source={images.onboarding}
            resizeMode="cover"
            className="w-full h-full"
          />
          <LinearGradient
            colors={["transparent", "black"]}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "20%",
            }}
          />
        </View>

        <View className="flex justify-center items-center px-12 gap-4 mt-4">
          <Text className="text-white text-3xl font-sora-extraBold text-center capitalize">
            Coffee so good , your taste buds will love it
          </Text>
          <Text className="text-white text-lg text-center font-sora-extraLight">
            The best grain, the finest roast , the powerful flavor
          </Text>

          <TouchableOpacity
            className="bg-primary-100 py-3 px-6 rounded-xl mt-4 w-full h-14"
            onPress={() => {
              router.push("/sign-in");
            }}
          >
            <Text className="text-white text-center font-sora-extraBold p-2">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoarding;
