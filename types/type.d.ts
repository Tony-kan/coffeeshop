import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface UseSupabaseOptions<
  T,
  P extends Record<string, string | number>
> {
  fn: (params: P) => Promise<T>;
  params?: P;
  skip?: boolean;
}

declare interface UseSupabaseReturn<T, P> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: (newParams: P) => Promise<void>;
}

declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

declare interface GlobalContextType {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  refetch: (newParams?: Record<string, string | number>) => Promise<void>;
  // refetch: () => void;
}

declare interface GlobalProviderProps {
  children: ReactNode;
}
