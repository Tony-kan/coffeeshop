import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "@/constants";

// interface CardProps {
//   id: number;
//   name: string;
//   image: string;
//   special_ingredient: string;
//   prices: string[];
// }

interface CardProps {
  item: {
    id: string;

    name: string;

    description: string;

    roasted: string;

    imagelink_square: any;

    imagelink_portrait: any;

    ingredients: string;

    special_ingredient: string;

    prices: {
      size: string;

      price: string;

      currency: string;
    }[];
    average_rating: string;

    index: number;
  };
}

//note  :  prices: [
//   {size: 'S', price: '1.38', currency: '$'},
//   {size: 'M', price: '3.15', currency: '$'},
//   {size: 'L', price: '4.29', currency: '$'},
// ],

export const FeaturedCard = ({ item }: CardProps) => {
  return (
    <TouchableOpacity className="flex-1 w-full mt-2 mb-4 px-4 py-2  rounded-lg bg-white shadow-black-100/70 relative">
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
      <View className="flex gap-2 my-2">
        <Text className="font-sora-bold">{item.name}</Text>
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
