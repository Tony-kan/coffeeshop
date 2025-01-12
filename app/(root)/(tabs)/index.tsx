import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "@/lib/supabase";
import BackButton from "@/components/BackButton";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import { images } from "@/constants";
import { FeaturedCard } from "@/components/Cards";
import CoffeeData from "@/lib/CoffeeData";

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
      {/* <ScrollView contentContainerClassName="h-full"> */}

      {/* </ScrollView> */}
      {/* Card section */}
      <FlatList
        data={CoffeeData}
        renderItem={({ item }) => <FeaturedCard item={item} />}
        keyExtractor={(item) => item?.id}
        numColumns={2}
        // contentContainerClassName="pb-32"
        showsVerticalScrollIndicator={false}
        columnWrapperClassName="flex gap-5 px-5"
        ListHeaderComponent={
          <View className="flex">
            {/* top section */}
            <View className="bg-black flex rounded-lg mt-4">
              {/* header :  profile */}
              <View className="flex mt-4 flex-row justify-between items-center px-2 py-4 mx-4">
                <View className="flex justify-between gap-2">
                  <Text className="text-white font-sora-bold text-md">
                    Location
                  </Text>
                  <Text className="text-white font-sora text-sm">
                    Zomba , Malawi
                  </Text>
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
              <View className="flex items-center justify-center top-10 left-0 transform rounded-md px-6 mt-6">
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
            <View className="mt-10">
              <Filters />
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Home;
