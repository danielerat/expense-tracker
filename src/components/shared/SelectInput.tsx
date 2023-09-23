import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  children?: string;
  name: string;
  refRegister: UseFormRegister<FieldValues>;
}
const SelectInput = ({ refRegister, name, children: label = name }: Props) => {
  return (
    <>
      <div>
        <label htmlFor={name} className="block text-sm font-bold text-gray-900">
          {label}
        </label>

        <select
          {...refRegister(name)}
          id={name}
          className="mt-1.5 p-3 w-full rounded-lg border-gray-200 text-gray-700 sm:text-sm">
          <option value="">Please select</option>
          <option value="grocey">Grocey</option>
          <option value="transport">Transport</option>
        </select>
      </div>
    </>
  );
};

export default SelectInput;
