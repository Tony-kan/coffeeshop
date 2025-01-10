import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, Tabs } from "expo-router";
import { icons } from "@/constants";

interface TabIconProps {
  focused: boolean;
  icon: any;
  title: string;
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    <Image
      source={icon}
      className="size-6"
      resizeMode="contain"
      tintColor={focused ? "#C67C4E" : "#9B9B9B"}
    />
    <Text
      className={`${
        focused
          ? "text-primary-300 font-sora-medium"
          : "text-secondary-100 font-sora"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.heart} title="Favorite" />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Order",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.bag} title="Order" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.notification}
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
