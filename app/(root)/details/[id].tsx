import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import CoffeeData from "@/lib/CoffeeData";
import { Coffee } from "@/types/type";
import BackButton from "@/components/BackButton";
import { icons, images } from "@/constants";

const Detail = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const getCoffeeDetailById = (id: string | undefined): Coffee | undefined => {
    return CoffeeData.find((coffee) => coffee.id === id);
  };

  const coffeeDetail = getCoffeeDetailById(id);

  const onSizePress = (index: number) => {
    setSelectedSizeIndex(index);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <SafeAreaView className="h-full w-full">
      <ScrollView>
        <View className="flex">
          {/* header  */}
          <View className="flex flex-row justify-between items-center mx-5 py-4">
            <BackButton />
            <Text className="text-2xl font-sora-semiBold">Details</Text>
            <TouchableOpacity>
              <Image
                source={icons.heart_favorite}
                className="size-8"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* coffee image  */}
          <View className="mx-5 my-4 h-72 rounded-xl">
            <Image
              source={coffeeDetail?.imagelink_square}
              className="w-full h-full rounded-xl"
              resizeMode="cover"
            />
          </View>

          {/* name,sspecial ingreidents ,rating  */}
          <View className="flex gap-3 mx-5 my-2">
            <Text className="text-xl font-sora-bold">{coffeeDetail?.name}</Text>
            <Text className="font-sora-extraLight">
              {coffeeDetail?.special_ingredient}
            </Text>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row gap-2 ">
                <Image
                  source={icons.star}
                  className="size-5"
                  resizeMode="contain"
                />
                {/* <Text>{`${coffeeDetail?.average_rating} 
                
                (${coffeeDetail?.ratings_count})`}</Text> */}
                <Text className="font-sora-bold">
                  {coffeeDetail?.average_rating}
                  <Text className="font-sora-light">{` (${coffeeDetail?.ratings_count})`}</Text>
                </Text>
              </View>
              <View className="flex flex-row gap-4 items-center">
                <Image
                  source={icons.beans}
                  className="size-6"
                  resizeMode="contain"
                />
                <Image
                  source={icons.milk}
                  className="size-7"
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>

          {/* description  */}
          <View className="border-t gap-2 mx-5 mt-4 border-secondary-100 py-4">
            <Text className="text-xl font-sora-semiBold">Description</Text>
            <Text
              className="font-sora-light"
              numberOfLines={showFullDescription ? undefined : 3}
            >
              {coffeeDetail?.description}
            </Text>
            <TouchableOpacity onPress={toggleDescription}>
              <Text className="text-primary-300 font-sora-bold">
                {" "}
                {showFullDescription ? "Read Less" : "Read More"}
              </Text>
            </TouchableOpacity>
          </View>
          {/* size  */}
          <View className="mx-5 mt-4 flex flex-row justify-between">
            {coffeeDetail?.prices.map((price, index) => (
              <TouchableOpacity
                className={`flex flex-row items-center justify-center gap-2 border-2  rounded-lg p-2 w-32 ${
                  selectedSizeIndex === index ? "border-primary-300" : ""
                }`}
                onPress={() => onSizePress(index)}
                key={index}
              >
                <Text
                  className={`font-extrabold text-2xl  ${
                    selectedSizeIndex === index ? "text-primary-300" : ""
                  }`}
                >
                  {price.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* prices  */}
          <View className="mx-6 flex flex-row justify-between my-4">
            <View className="flex items-center justify-center gap-2 mx-2">
              <Text className="text-xl font-sora-semiBold">Price</Text>
              <Text className="text-lg font-sora-extraLight">{`${coffeeDetail?.prices[selectedSizeIndex]?.currency} ${coffeeDetail?.prices[selectedSizeIndex]?.price}`}</Text>
            </View>
            <TouchableOpacity className="flex items-center justify-center bg-primary-300 px-4 py-4 rounded-lg">
              <Text className="font-sora-bold text-white">Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
