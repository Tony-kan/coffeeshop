import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { GlobalProvider } from "@/context/global-provider";

// prevent the splash screen from auto-hiding before assets loading is complete
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded] = useFonts({
    "Sora-Regular": require("../assets/fonts/Sora-Regular.ttf"),
    "Sora-Thin": require("../assets/fonts/Sora-Thin.ttf"),
    "Sora-Light": require("../assets/fonts/Sora-Light.ttf"),
    "Sora-ExtraLight": require("../assets/fonts/Sora-ExtraLight.ttf"),
    "Sora-Medium": require("../assets/fonts/Sora-Medium.ttf"),
    "Sora-Bold": require("../assets/fonts/Sora-Bold.ttf"),
    "Sora-SemiBold": require("../assets/fonts/Sora-SemiBold.ttf"),
    "Sora-ExtraBold": require("../assets/fonts/Sora-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GlobalProvider>
  );
}
