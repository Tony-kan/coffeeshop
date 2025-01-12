import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "@/lib/supabase";

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
    <SafeAreaView>
      <Text>Home</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
