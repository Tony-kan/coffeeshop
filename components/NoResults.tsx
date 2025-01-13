import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

const NoResults = ({ className }: { className?: string }) => {
  return (
    <View className={`flex items-center ${className}`}>
      <Image
        source={images.noResult}
        className="w-11/12 h-40"
        resizeMode="contain"
      />
      <Text className="text-2xl font-sora-bold  text-primary-300 mt-4">
        NoResults
      </Text>
      <Text className="capitalize text-base text-primary-100 mt-2">
        Could not find any results
      </Text>
    </View>
  );
};

export default NoResults;
