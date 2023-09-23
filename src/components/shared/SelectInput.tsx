const SelectInput = () => {
  return (
    <>
      <div>
        <label
          htmlFor="HeadlineAct"
          className="block text-sm font-bold text-gray-900">
          Category
        </label>

        <select
          name="HeadlineAct"
          id="HeadlineAct"
          className="mt-1.5 p-3 w-full rounded-lg border-gray-200 text-gray-700 sm:text-sm">
          <option value="">Please select</option>
          <option value="g">Grocey</option>
          <option value="t">Transport</option>
        </select>
      </div>
    </>
  );
};

export default SelectInput;
