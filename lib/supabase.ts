import { Alert, AppState } from "react-native";
import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export async function signIn(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  //   if (error) throw error;
  if (error) Alert.alert("Error signing in", error.message);
  return;
}

export async function signUp(email: string, password: string) {
  const {
    data: { session },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) Alert.alert("Error signing up", error.message);
  if (!session) Alert.alert("Please check your inbox for email verification!");
  //   return { user, session };
  return { session, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) Alert.alert("Error signing out", error.message);
  return;
}

export async function getCurrentUser() {
  const user = supabase.auth.getUser();
  return user;
}
