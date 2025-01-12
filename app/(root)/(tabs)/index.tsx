import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "@/lib/supabase";
import BackButton from "@/components/BackButton";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import { images } from "@/constants";

/**
 * Home Screen
 *
 * A screen that displays the Index screen : home.
 *
 * @returns The Home Screen.
 */

const Home = () => {
  const logout = async () => {
    console.log("logout");
    await signOut();
  };
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerClassName="h-full">
        <View className="flex justify-between">
          {/* top section */}
          <View className="bg-black flex rounded-lg" style={{ height: "56%" }}>
            {/* header :  profile */}
            <View className="flex flex-row justify-betwee items-center p-4">
              <View className="flex justify-between gap-2">
                <Text className="text-white font-sora-bold text-xl">
                  Location
                </Text>
                <Text className="text-white font-sora">Zomba , Malawi</Text>
              </View>
              <View className="flex">
                <Image
                  source={images.avatar}
                  className="size-11"
                  resizeMode="contain"
                />
              </View>
            </View>
            {/* seach */}
            <Search />
            {/* promo section */}
            <View className="flex items-center justify-center top-1/3 left-0 transform -translate-y-1/2 rounded-md px-6 mt-6">
              <Image
                resizeMode="cover"
                source={images.home_bg}
                className="w-full h-48  rounded-lg"
              />
              <Text className="absolute text-white font-sora-extraBold  capitalize text-3xl bg-black">
                Buy One get One Free
              </Text>
            </View>
          </View>
          <View>
            <Filters />
          </View>
          {/* Card section */}
          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
