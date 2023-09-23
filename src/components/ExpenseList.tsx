type Expense = {
  id: number;
  description: string;
  amount: number;
  category: string;
};

type ExpenseListProps = {
  expenses: Expense[];
};

const ExpenseList = ({ expenses }: ExpenseListProps) => {
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
          {expenses.map((expense: Expense) => (
            <tr key={expense.id} className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {expense.description}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {expense.amount}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {expense.category}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
