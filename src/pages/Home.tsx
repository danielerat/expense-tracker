import { useRef, useState } from "react";
import ExpenseList from "../components/ExpenseList";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import SelectInput from "../components/shared/SelectInput";
import { useForm, FieldValues } from "react-hook-form";
const Home = () => {
  const description = useRef(null);
  const amount = useRef(null);
  const category = useRef(null);
  const { register, handleSubmit } = useForm();

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 1300, category: "Grocery" },
  ]);

  function onSubmit(data: FieldValues) {
    console.log(data);
    console.log(amount?.current);
    console.log(description?.current);
    console.log(category?.current);
    setExpenses((current) => {
      return [...current];
    });
  }
  return (
    <>
      <div className="md:flex items-center p-10">
        <div className="basis-1/2 p-5 bg-gray-100 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-10">
              <Input refRegister={register} name="description" type="text">
                Description
              </Input>
              <Input refRegister={register} name="amount" type="number">
                Amount
              </Input>
              <SelectInput refRegister={register} name="type">
                Category of Expense
              </SelectInput>
              <Button type="submit">Add Expense</Button>
            </div>
          </form>
        </div>
        <div className="basis-1/2 p-5">
          <ExpenseList expenses={expenses}></ExpenseList>
        </div>
      </div>
    </>
  );
};

export default Home;
