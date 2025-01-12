import { Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Categories } from "@/lib/data";
import { router, useLocalSearchParams } from "expo-router";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("All");
      router.setParams({ filter: "All" });
      return;
    }
    setSelectedCategory(category);
    router.setParams({ filter: category });
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {Categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCategoryPress(item.category)}
          className={`flex flex-col items-start mx-5 px-4 py-2 rounded-lg ${
            selectedCategory === item.category ? "bg-primary-300" : " "
          }`}
        >
          <Text
            className={`text-sm  ${
              selectedCategory === item.category
                ? "text-white font-sora-bold mt-0.5"
                : "text-black font-sora"
            }`}
          >
            {item?.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
