import CATEGORIES from "../../data/Categories";
interface Props {
  children?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refRegister: any;
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
          <option>Please select</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectInput;
