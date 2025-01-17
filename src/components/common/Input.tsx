import { ComponentProps } from "react";

type InputProps = {
  label: string;
  type: "text" | "password";
} & ComponentProps<"input">;
function Input({ label, type, ...props }: InputProps) {
  return (
    <div className="border border-gray-300 py-2 px-4 w-[300px] rounded-lg flex flex-col gap-1">
      <label className="text-[13px] text-gray-600">{label}</label>
      <input type={type} className="ring-0 outline-none" {...props} />
    </div>
  );
}

export default Input;
