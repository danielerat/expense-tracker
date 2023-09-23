import ExpenseList from "../components/ExpenseList";
import Input from "../components/shared/Input";
import SelectInput from "../components/shared/SelectInput";

const Home = () => {
  return (
    <>
      <div className="md:flex items-center p-10">
        <div className="basis-1/2 p-5 bg-gray-100 rounded-lg">
          <div className="flex flex-col gap-10">
            <Input name="Description" type="text"></Input>
            <Input name="Amount" type="text"></Input>
            <SelectInput></SelectInput>
          </div>
        </div>
        <div className="basis-1/2 p-5">
          <ExpenseList></ExpenseList>
        </div>
      </div>
    </>
  );
};

export default Home;
