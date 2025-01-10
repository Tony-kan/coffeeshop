import { Redirect } from "expo-router";

export default function Index() {
  // const {onboarded,signedIn} = useAuth();
  const { onboarded, signedIn } = { onboarded: true, signedIn: true };

  if (onboarded && signedIn) {
    return <Redirect href="/(root)/(tabs)" />;
  }

  if (onboarded && !signedIn) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return <Redirect href="/(auth)/onboarding" />;
}
