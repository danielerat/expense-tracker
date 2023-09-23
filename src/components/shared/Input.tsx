interface Props {
  children?: string;
  name: string;
  type: "text" | "password" | "number" | "email";
  refRegister: any;
}
const Input = ({ name, type, refRegister, children: label = name }: Props) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="relative block font-bold border border-gray-400 rounded-md shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <input
          {...refRegister(
            name,
            type === "number" ? { valueAsNumber: true } : {}
          )}
          type={type}
          id={name}
          className="p-3 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0"
          placeholder={name}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-gray-100 p-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          {label}
        </span>
      </label>
    </div>
  );
};

export default Input;
