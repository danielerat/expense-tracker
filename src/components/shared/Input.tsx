import { LegacyRef } from "react";

interface Props {
  name: string;
  type: "text" | "password";
  refProp: LegacyRef<HTMLInputElement>;
}
const Input = ({ name, type, refProp }: Props) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="relative block rounded-md border font-bold border-gray-400 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <input
          ref={refProp}
          type={type}
          id={name}
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent p-3 focus:outline-none focus:ring-0"
          placeholder={name}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          {name}
        </span>
      </label>
    </div>
  );
};

export default Input;
