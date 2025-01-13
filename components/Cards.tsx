import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "@/constants";
import { CardProps } from "@/types/type";

export const FeaturedCard = ({ item, onPress }: CardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-2 mb-4 px-4 py-2  rounded-lg bg-white shadow-black-100/70 relative"
    >
      {/* rating & star  */}
      <View className="flex flex-row  items-center absolute px-2  top-5 left-5 bg-white/90 p-1   rounded-lg gap-2">
        <Image source={icons.star} className="size-3.5" />
        <Text>{item.average_rating}</Text>
      </View>

      {/* coffee  image */}
      <Image
        source={item.imagelink_square}
        className="w-full h-44 -z-50 rounded-xl"
        resizeMode="contain"
      />

      {/* name  & ingredients  */}
      <View className="flex gap-1 my-2">
        <Text className="font-sora-bold text-lg">{item.name}</Text>
        <Text className="font-extralight">{item.special_ingredient}</Text>
      </View>
      {/* plus  &  add  btn  */}
      <View className="flex flex-row justify-between items-center gap-2 my-2">
        <Text className="font-sora-bold">{`${item.prices[1].currency} ${item.prices[1].price}`}</Text>
        <TouchableOpacity className="flex flex-row items-center justify-center bg-primary-300 rounded-lg size-8">
          <Image source={icons.plus} resizeMode="contain" className="size-6" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export const OrderCard = ({ item }: CardProps) => {
  return (
    <View className="flex flex-row items-center my-1.5 rounded-xl px-2 bg-secondary-200">
      <View className="flex-1 flex-row justify-between items-center">
        <View className="flex items-center justify-center h-16 w-16 rounded-xl overflow-hidden">
          <Image
            source={item.imagelink_square}
            className="w-full h-full"
            resizeMode="contain"
            key={item.id}
          />
        </View>
        <View>
          <Text className="font-sora-bold">{item.name}</Text>
          <Text className="font-sora-light">{item.special_ingredient}</Text>
        </View>
        <View className="flex flex-row items-center gap-2">
          <TouchableOpacity className="bg-primary-300 rounded-lg size-8 flex items-center justify-center p-2">
            <Image
              source={icons.minus}
              className="size-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text className="font-sora-bold mx-2">2</Text>
          <TouchableOpacity className="bg-primary-300 rounded-lg size-8 flex items-center justify-center p-2">
            <Image
              source={icons.plus}
              className="size-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
