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
