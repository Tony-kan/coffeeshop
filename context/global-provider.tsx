import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { GlobalContextType, GlobalProviderProps } from "@/types/type";
import { useSupabase } from "@/lib/useSupabase";
import { getCurrentSession, getCurrentUser } from "@/lib/supabase";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const {
    data: session,
    loading,
    refetch,
  } = useSupabase({ fn: getCurrentSession });

  const [user, setUser] = useState(session?.user || null);

  useEffect(() => {
    setUser(session?.user || null);
  }, [session]);

  const isLoggedIn = !!user;
  // const user = session?.user; Password
  //
  // console.log(JSON.stringify(user, null, 2));
  return (
    <GlobalContext.Provider value={{ isLoggedIn, user, loading, refetch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
};
