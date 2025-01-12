import { useGlobalContext } from "@/context/global-provider";
import { Redirect } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function Index() {
  // const {onboarded,signedIn} = useAuth();
  const { onboarded } = { onboarded: true };
  const { isLoggedIn, loading, user } = useGlobalContext();

  // if (onboarded && isLoggedIn) {
  //   return <Redirect href="/(root)/(tabs)" />;
  // }

  // if (onboarded && !user) {
  //   return <Redirect href="/(auth)/sign-in" />;
  // }

  // if (!onboarded) return <Redirect href="/(auth)/onboarding" />;
  if (loading) {
    return <ActivityIndicator size="large" color="#67C4E" />;
  }

  if (onboarded) {
    return isLoggedIn ? (
      <Redirect href="/(root)/(tabs)" />
    ) : (
      <Redirect href="/(auth)/sign-in" />
    );
  }

  return <Redirect href="/(auth)/onboarding" />;
}
