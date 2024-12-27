import { useEffect, useState } from "react";
import { getItem, removeItem, setItem } from "../../utils/localStorage";

export function usePersistedState<T extends string>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const item = getItem(key);
    return (item as T) || initialValue;
  });

  useEffect(() => {
    if (value) {
      setItem(key, value);
    } else {
      removeItem(key);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
