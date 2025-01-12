import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);
  const [isFocused, setIsFocused] = useState(false);

  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500
  );
  const handleSearch = async (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };
  return (
    <View
      className={`border-2  bg-secondary-100 flex flex-row justify-between items-center px-2 mx-6 my-2 py-1 rounded-lg ${
        isFocused ? "border-primary-300" : ""
      }`}
    >
      <View className="flex-1 flex-row items-center justify-start gap-2 pl-4 z-50">
        <Image source={icons.search} resizeMode="contain" className="size-5" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="search coffee"
          className="text-xl text-white font-extraLight ml-2 flex-1"
          placeholderTextColor="white"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <TouchableOpacity className="bg-primary-100 p-2 rounded-lg">
        <Image source={icons.filter} resizeMode="contain" className="size-6" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
