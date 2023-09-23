import { useState } from "react";
import ExpenseList from "../components/ExpenseList";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import SelectInput from "../components/shared/SelectInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorParagraph from "../components/shared/ErrorParagraph";
import CATEGORIES from "../data/Categories";

const schema = z.object({
  id: z.number().optional(),
  description: z.string().min(3),
  amount: z.number().min(10),
  category: z.enum(CATEGORIES, {
    errorMap: () => ({ message: "Invalid Category" }),
  }),
});
type ExpenseFormData = z.infer<typeof schema>;
const Home = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "test", amount: 100, category: "Groceries" },
    { id: 2, description: "anoe", amount: 100, category: "Groceries" },
    { id: 3, description: "fine", amount: 100, category: "Groceries" },
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });
  console.log(errors);

  return (
    <>
      <div className="items-center p-10 md:flex">
        <div className="p-5 bg-gray-100 rounded-lg basis-1/2">
          <form
            onSubmit={handleSubmit((e) => {
              setExpenses([...expenses, { ...e, id: expenses.length + 1 }]);
              reset();
            })}>
            <div className="flex flex-col gap-10">
              <div>
                <Input refRegister={register} name="description" type="text">
                  Description
                </Input>
                {errors.description && (
                  <ErrorParagraph>
                    {String(errors.description.message)}
                  </ErrorParagraph>
                )}
              </div>
              <div>
                <Input refRegister={register} name="amount" type="number">
                  Amount
                </Input>
                {errors.amount && (
                  <ErrorParagraph>
                    {String(errors.amount.message)}
                  </ErrorParagraph>
                )}
              </div>
              <div>
                <SelectInput refRegister={register} name="category">
                  Category of Expense
                </SelectInput>
                {errors.category && (
                  <ErrorParagraph>
                    {String(errors.category.message)}
                  </ErrorParagraph>
                )}
              </div>
              <Button type="submit">Add Expense</Button>
            </div>
          </form>
        </div>
        <div className="p-5 bg-gray-100 basis-1/2">
          <ExpenseList
            expenses={expenses}
            onDelete={(id) =>
              setExpenses(expenses.filter((e) => e.id !== id))
            }></ExpenseList>
        </div>
      </div>
    </>
  );
};

export default Home;
