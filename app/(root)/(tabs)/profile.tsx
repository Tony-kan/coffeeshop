import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "@/lib/supabase";
import CustomButton from "@/components/CustomButton";
import { GlobalProvider, useGlobalContext } from "@/context/global-provider";
import { Redirect, router } from "expo-router";

/**
 * Profile Screen
 *
 * A screen that displays the Profile screen.
 *
 * @returns The Profile Screen.
 */
const Profile = () => {
  const onlogout = async () => {
    const { refetch, isLoggedIn } = useGlobalContext();
    const result = await signOut();

    console.log("logout", result);
    if (result.status === "success") {
      await refetch();
      router.push("/(auth)/sign-in");
    }
    // return;
  };
  return (
    <SafeAreaView>
      <Text>Profile or Notifications</Text>
      <CustomButton title="Sign Out" onPress={() => onlogout()} />
    </SafeAreaView>
  );
};

export default Profile;
