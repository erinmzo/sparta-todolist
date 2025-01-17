import { ChangeEvent, useState } from "react";

export function useInputChange<T extends object>(initialValue: T) {
  const [input, setInput] = useState<T>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { input, handleChange };
}
