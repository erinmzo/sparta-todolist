import { ComponentProps } from "react";

type InputProps = {
  label: string;
  type: "text" | "password" | "file";
} & ComponentProps<"input">;
function Input({ label, type, ...props }: InputProps) {
  if (type === "file") {
    return (
      <div className="border border-gray-300 py-2 px-4 w-[300px] rounded-lg flex flex-col gap-1">
        <label className="text-[13px] text-gray-600">{label}</label>
        <input type={type} className="ring-0 outline-none appearance-none text-[14px]" {...props} />
      </div>
    );
  }

  return (
    <div className="border border-gray-300 py-2 px-4 w-[300px] rounded-lg flex flex-col gap-1">
      <label className="text-[13px] text-gray-600">{label}</label>
      <input type={type} className="ring-0 outline-none appearance-none" {...props} />
    </div>
  );
}

export default Input;
