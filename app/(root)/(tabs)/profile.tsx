import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "@/lib/supabase";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "@/context/global-provider";
import { Redirect, router } from "expo-router";
import { icons, images } from "@/constants";
import { settings } from "@/lib/data";

/**
 * Profile Screen
 *
 * A screen that displays the Profile screen.
 *
 * @returns The Profile Screen.Password
 *
 * inte
 */

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: any;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex flex-row items-center justify-between py-3"
  >
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="size-6" />
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
        {title}
      </Text>
    </View>

    {showArrow && <Image source={icons.arrowRight} className="size-5" />}
  </TouchableOpacity>
);
const Profile = () => {
  const { refetch, user } = useGlobalContext();

  const handleLogout = async () => {
    const result = await signOut();

    if (result.status) {
      Alert.alert("Success", "You have logged out");
      refetch();
    } else {
      Alert.alert("Error", "An Error occurred during Logging Out");
    }
    // return;
  };
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row items-center justify-between mt-5">
          <Text className="text-xl font-sora-bold">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>
        <View className="flex flex-row justify-center mt-4">
          <View className="flex flex-col items-center relative rounded-full">
            <Image
              source={images.avatar}
              className="size-44 relative rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>
            <Text className="text-2xl font-sora-bold mt-2">{user?.name}</Text>
          </View>
        </View>
        <View className="flex flex-col mt-4">
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
