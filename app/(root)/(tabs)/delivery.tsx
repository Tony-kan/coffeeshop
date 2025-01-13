import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Map from "@/components/Map";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { icons, images } from "@/constants";

/**
 * Favorite Screen
 *
 * A screen that displays all favorited items.
 *
 * @returns The Favorite Screen.
 */
const Delivery = () => {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  return (
    <GestureHandlerRootView>
      <SafeAreaView className="h-full">
        <Map />
        <BottomSheet ref={bottomSheetRef} snapPoints={["45%", "50%"]} index={1}>
          <BottomSheetView>
            <SafeAreaView className="mx-5">
              <View className="flex mx-3">
                <View className="flex flex-row items-center justify-center gap-2 border  border-secondary-300 p-4 rounded-xl">
                  <View className="border  border-secondary-300 rounded-xl p-3">
                    <Image
                      source={icons.bike}
                      resizeMode="contain"
                      className="size-10"
                    />
                  </View>

                  <View>
                    <Text className="font-sora-semiBold text-lg">
                      Delivered your order
                    </Text>
                    <Text className="font-sora-light">
                      We deliver your orders to you in the shortest possibel
                      time
                    </Text>
                  </View>
                </View>
                <View className="flex flex-row justify-between items-center my-6">
                  <View className="h-16 w-16 rounded-xl overflow-hidden">
                    <Image
                      source={images.avatar}
                      className="h-full w-full"
                      resizeMode="contain"
                    />
                  </View>

                  <View className="flex gap-2">
                    <Text className="font-sora-bold">Johan</Text>
                    <Text className="font-sora-light">Personal Courier</Text>
                  </View>
                  <TouchableOpacity className="rounded-xl border border-secondary-300 size-14 flex items-center justify-center">
                    <Image
                      source={icons.phone}
                      resizeMode="contain"
                      className="size-6"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Delivery;
