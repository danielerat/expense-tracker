import { useState } from "react";
import ExpenseList from "../components/ExpenseList";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import SelectInput from "../components/shared/SelectInput";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(3),
  amount: z.number().min(1),
  category: z.string(),
});
// type FormData = z.infer<typeof schema>;

const Home = () => {
  const [expenses] = useState([
    { id: 1, description: "Milk", amount: 1300, category: "Grocery" },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FieldValues) {
    console.log(data);
    console.log();

    console.log(isValid);
    console.log(isSubmitted);
  }
  return (
    <>
      <div className="md:flex items-center p-10">
        <div className="basis-1/2 p-5 bg-gray-100 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-10">
              <Input
                refRegister={register}
                name="description"
                type="text"
                // @ts-ignore
                fieldError={errors?.description?.message}>
                Description
              </Input>

              <Input
                refRegister={register}
                name="amount"
                type="number"
                // @ts-ignore
                fieldError={errors?.amount?.message}>
                Amount
              </Input>
              <SelectInput refRegister={register} name="type">
                Category of Expense
              </SelectInput>
              <Button type="submit">Add Expense</Button>
            </div>
          </form>
        </div>
        <div className="bg-gray-100 basis-1/2 p-5">
          <ExpenseList expenses={expenses}></ExpenseList>
        </div>
      </div>
    </>
  );
};

export default Home;
