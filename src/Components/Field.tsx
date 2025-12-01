import React from "react";
type FieldType = {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};
const Field = ({ label, type, value, onChange, errorMessage }: FieldType) => {
  return (
    <div className="field flex justify-center items-start flex-col gap-1 w-full relative">
      <h2 className=" text-white text-lg font-semibold">{label}</h2>
      <input
        type={type}
        name="name"
        id="name"
        value={value}
        onChange={onChange}
        className={`input bg-white/70 text-[#1f5fde] font-semibold text-lg rounded-md w-full p-2 border border-solid  ${
          !!errorMessage
            ? "border-[#ff0000] hover:border-[#ff0000] focus:border-[#ff0000]"
            : "border-[#1f5fde]/50 hover:border-[#1f5fde] focus:border-[#1f5fde]"
        } outline-0 hover:shadow-[0px_4px_6px_0px_$000000] duration-200 focus:shadow-[0px_4px_6px_0px_rgba(0,0,0,0.2)]`}
      />
      <p
        className={`min-h-[22px] text-[#ff0000] font-semibold text-sm w-fit rounded-md absolute top-2 right-0 duration-200 ${
          !!errorMessage ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default Field;
