import { FormEvent, useRef, useState } from "react";
import ExpenseList from "../components/ExpenseList";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import SelectInput from "../components/shared/SelectInput";

const Home = () => {
  const description = useRef(null);
  const amount = useRef(null);
  const category = useRef(null);

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 1300, category: "Grocery" },
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(amount.current);
    console.log(description.current);
    console.log(category.current);
    setExpenses([
      ...expenses,
      { id: 5, description: "whatever", amount: 1300, category: "Grocery" },
    ]);
  }
  return (
    <>
      <div className="md:flex items-center p-10">
        <div className="basis-1/2 p-5 bg-gray-100 rounded-lg">
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-10">
              <Input
                refProp={description}
                name="Description"
                type="text"></Input>
              <Input refProp={amount} name="Amount" type="text"></Input>
              <SelectInput refProp={category}></SelectInput>
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
