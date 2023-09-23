import { FcFullTrash } from "react-icons/fc";
interface Props {
  handleDelete: (id: number) => void;
  expenseId: number;
}

const ButtonDelete = ({ handleDelete, expenseId }: Props) => {
  return (
    <button
      onClick={() => handleDelete(expenseId)}
      className="group flex items-center justify-between gap-2 rounded-lg border border-current px-2 py-1 text-red-600 transition-colors hover:bg-red-600 focus:outline-none focus:ring active:bg-red-500">
      <span className="text-lg shrink-0 rounded-full border border-red-600 bg-white p-1 group-active:border-red-500">
        <FcFullTrash></FcFullTrash>
      </span>
    </button>
  );
};

export default ButtonDelete;
