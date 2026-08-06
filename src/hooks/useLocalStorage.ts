import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface UseLocalStorageOptions<T> {
  key: string;
  initialValue: T;
  delay?: number;
}

interface UseLocalStorageReturn<T> {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  loading: boolean;
}

export function useLocalStorage<T>({
  key,
  initialValue,
  delay = 1000,
}: UseLocalStorageOptions<T>): UseLocalStorageReturn<T> {
  const [value, setValue] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = localStorage.getItem(key);

        if (stored) {
          setValue(JSON.parse(stored) as T);
        } else {
          setValue(initialValue);
        }
      } catch {
        setValue(initialValue);
      } finally {
        setLoading(false);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, initialValue, key]);

  useEffect(() => {
    if (loading) return;

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore storage errors
    }
  }, [key, loading, value]);

  return {
    value,
    setValue,
    loading,
  };
}
