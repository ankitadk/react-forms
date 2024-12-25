import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  let [bill, setBill] = useState("🚘⛱️");
  let { register, handleSubmit, reset } = useForm();

  function submitHandler(data) {
    let amount = data.amount;
    let users = data.users;
    setBill(Math.floor(amount / users));
    reset();
  }

  return (
    <>
      <div className="flex items-center justify-center mx-auto w-full h-screen">
        <form
          action=""
          className="w-[400px] text-center"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="text-4xl font-black">{bill}</h1>
          <h1 className="text-xl font-bold">
            Split the bill among your friends!
          </h1>
          <p className="text-sm text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem,
            ipsum. Lorem ipsum dolor sit..
          </p>
          <div className="mt-4 flex gap-2">
            <input
              {...register("amount")}
              className="border w-1/2 px-3 py-2 outline-none rounded-xl"
              type="text"
              placeholder="Enter amount"
            />
            <input
              {...register("users")}
              className="border px-3 py-2 outline-none rounded-xl"
              type="text"
              placeholder="Enter Users"
            />
          </div>
          <input
            type="submit"
            className="mt-3 w-full bg-black px-3 py-2 text-white rounded-xl hover:cursor-pointer"
            value="Split the bill"
          />
        </form>
      </div>
    </>
  );
}

export default App;
