import Input from "../components/shared/Input";

const Home = () => {
  return (
    <>
      <div className="md:flex items-center p-10">
        <div className="basis-1/2 p-5 bg-gray-100 rounded-lg">
          <div className="flex flex-col gap-10">
            <Input name="Description" type="text"></Input>
            <Input name="Amount" type="text"></Input>
          </div>
        </div>
        <div className="basis-1/2 p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel
          ipsam iure sit fugit fugiat, totam et odio, debitis facilis rem ipsum
          ab necessitatibus sequi, soluta assumenda impedit dicta? Ullam.
        </div>
      </div>
    </>
  );
};

export default Home;
