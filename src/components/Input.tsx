import { ChangeEvent } from "react";

interface InputProps {
  id: string;
  label: string;
  type: string;
  autoFocus?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ id, label, type, autoFocus, value, onChange }: InputProps) {
  return (
    <div>
      <label htmlFor={id}>
        {label} <span>*</span>
      </label>
      <input id={id} type={type} autoComplete="off" autoFocus={autoFocus} value={value} onChange={onChange} />
    </div>
  );
}
