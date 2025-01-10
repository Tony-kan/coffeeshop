import { icons, images } from "@/constants";
import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-sora text-red-400">
        Edit app/index.tsx to edit this screen.
      </Text>
     
    </View>
  );
}
