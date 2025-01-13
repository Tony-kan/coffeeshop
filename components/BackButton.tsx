import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons } from "@/constants";
import { router } from "expo-router";

const BackButton = () => {
  return (
    <TouchableOpacity
      className="flex flex-row items-center bg-secondary-300 rounded-full size-8 justify-center"
      onPress={() => router.back()}
    >
      <Image source={icons.backArrow} className="size-6" resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default BackButton;
