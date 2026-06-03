import styles from "./TextInput.module.css";
import React from "react";

interface TextInputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
}

export function TextInput({
  value,
  setValue,
  placeholder,
  onKeyDown,
}: TextInputProps) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <input
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={styles["text-input"]}
      onKeyDown={onKeyDown}
    />
  );
}
