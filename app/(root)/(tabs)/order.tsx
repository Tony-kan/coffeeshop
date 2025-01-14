import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { OrderCard } from "@/components/Cards";
import NoResults from "@/components/NoResults";
import CoffeeData from "@/lib/CoffeeData";

/**
 * Order Screen
 *
 * A screen that displays all orders.
 *
 * @returns The Order Screen.
 */

// export const orderItems = [{}];
const Order = () => {
  const [orderType, setOrderType] = useState("Deliver");
  const [loading, setLoading] = useState(false);
  const toggleButtton = (text: string) => setOrderType(text);

  const slicedCoffeeData = CoffeeData.slice(0, 2);
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={slicedCoffeeData}
        renderItem={({ item }) => (
          <View className="flex mx-5">
            <OrderCard item={item} />
          </View>
        )}
        keyExtractor={(item) => item?.id}
        showsVerticalScrollIndicator={false}
        // initialNumToRender={2}
        // maxToRenderPerBatch={4}
        // windowSize={4}
        contentContainerClassName="pb-20"
        ListEmptyComponent={
          loading ? (
            <View className="flex-1 mt-20 flex-col items-center ">
              <ActivityIndicator size="large" className="text-primary-300" />
            </View>
          ) : (
            <NoResults className="my-2" />
          )
        }
        ListHeaderComponent={
          <View className="flex">
            {/* header  */}
            <View className="flex flex-row gap-36 justify-start items-center mx-5 py-4">
              <BackButton />
              <Text className="text-2xl font-sora-semiBold">Order</Text>
            </View>
            {/* toggle bten deliver and pickup  */}
            <View className="flex mt-2 flex-row items-center  justify-center h-14">
              <View className="flex flex-row justify-center h-full items-center rounded-xl bg-secondary-200">
                <TouchableOpacity
                  className={`flex items-center justify-center h-full rounded-xl w-52 ${
                    orderType === "Deliver"
                      ? "bg-primary-300"
                      : "bg-secondary-200"
                  }`}
                  onPress={() => toggleButtton("Deliver")}
                >
                  <Text
                    className={`font-sora-semiBold ${
                      orderType === "Deliver" ? "text-white" : ""
                    }`}
                  >
                    Deliver
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className={`flex items-center justify-center h-full rounded-xl w-52 ${
                    orderType === "Pick Up"
                      ? "bg-primary-300"
                      : "bg-secondary-200"
                  }`}
                  onPress={() => toggleButtton("Pick Up")}
                >
                  <Text
                    className={`font-sora-semiBold ${
                      orderType === "Pick Up" ? "text-white" : ""
                    }`}
                  >
                    Pick Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* delivery address section  */}
            <View className="flex mx-5 my-4 gap-5">
              <Text className="text-xl font-sora-semiBold">
                Delivery Address
              </Text>
              <View className="flex gap-2">
                <Text className="font-sora-bold">JI.Kpg. Sutoyo</Text>
                <Text className="font-sora-light">
                  k.p.g Sutoyo No.620, BTZ, Malawi
                </Text>
              </View>
              <View className="flex flex-row justify-start gap-10 items-center">
                <TouchableOpacity className="flex flex-row border items-center justify-center gap-2 py-2 px-4 rounded-xl">
                  <Image
                    source={icons.edit}
                    className="size-6"
                    resizeMode="contain"
                  />
                  <Text>Edit address</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex flex-row border items-center justify-center gap-2 py-2 px-4 rounded-xl">
                  <Image
                    source={icons.note}
                    className="size-6"
                    resizeMode="contain"
                  />
                  <Text className="font-sora">Add Note</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
        ListFooterComponent={
          <View className="flex">
            {/* discount section  */}
            <View className="flex flex-row justify-between items-center mx-5 my-4 p-4 border rounded-xl">
              <Image
                source={icons.discount}
                className="size-8"
                resizeMode="contain"
              />
              <Text className="font-sora-bold text-md capitalize">
                1 Discount is applied
              </Text>
              <TouchableOpacity>
                <Image
                  source={icons.arrowRight}
                  className="size-6"
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            {/* payment summary section  */}
            <View className="flex mx-5 gap-2 mb-4 mt-2">
              <Text className="font-sora-semiBold text-lg">
                Payment Summary
              </Text>
              <View className="flex flex-row justify-between items-center">
                <Text>Total items</Text>
                <Text>2</Text>
              </View>
              <View className="flex flex-row justify-between items-center">
                <Text className="font-sora">Price</Text>
                <Text className="font-sora">{"$ 24"}</Text>
              </View>
              <View className="flex flex-row justify-between items-center">
                <Text className="font-sora">Delivery Fee</Text>
                <Text className="font-sora">{"$ 3"}</Text>
              </View>
              <View className="flex flex-row justify-between items-center border-t pt-4">
                <Text className="font-sora">Total Payment</Text>
                <Text className="font-sora">{"$ 27"}</Text>
              </View>
            </View>
            <View className="mx-5">
              <CustomButton title="Order" />
            </View>
          </View>
        }
      />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default Order;
