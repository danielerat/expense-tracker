const ExpenseList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Description
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Amount
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Category
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-thin text-gray-900">
              action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr className="odd:bg-gray-50">
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Milk Milk Milk
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              1300fr
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              Category
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              delete
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
