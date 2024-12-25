// useRef Hook

// let nameInput = useRef();
// let emailInput = useRef();

// function submitHandler(event) {
//   event.preventDefault();
//   console.log(nameInput.current.value, emailInput.current.value);
//   nameInput.current.value = "";
// }

{
  /* <div className="flex items-center justify-center mx-auto w-full h-screen">
  <form action="" className="w-[400px] rounded-xl p-4" onSubmit={submitHandler}>
    <h1 className="text-xl font-bold">This is a useRef input</h1>
    <p>
      In useRef we target the input field using the ref attribute and then we
      can access the value using ref.current.value
    </p>
    <input
      ref={nameInput}
      className="w-full border outline-none px-3 py-2 my-2 rounded-lg"
      type="text"
      placeholder="Enter name"
    />
    <input
      ref={emailInput}
      className="w-full border outline-none px-3 py-2 my-2 rounded-lg"
      type="email"
      placeholder="Enter email"
    />
    <input
      className="bg-violet-100 text-violet-600 px-4 py-1 rounded-lg"
      type="submit"
    />
  </form>
</div> */
}

//controlled components
/*import { useRef, useState } from "react";

function App() {
  let [value, setValue] = useState({ name: "", email: "" });

  function submitHandler(e) {
    e.preventDefault();
    console.log(value);
  }

  return (
    <>
      <div className="flex items-center justify-center mx-auto w-full h-screen">
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            onChange={(event) => {
              setValue({ ...value, name: event.target.value });
            }}
            placeholder="Name"
          />
          <input
            type="email"
            onChange={(event) => {
              setValue({ ...value, email: event.target.value });
            }}
            placeholder="Email"
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;*/

// React Hook Form
/*
import { useForm } from "react-hook-form";

function App() {
  let { register, handleSubmit, reset } = useForm();
  //   console.log(register());

  function submitHandler(data) {
    console.log(data);
    reset();
  }

  return (
    <>
      <div className="flex items-center justify-center mx-auto w-full h-screen">
        <form action="" onSubmit={handleSubmit(submitHandler)}>
          <input {...register("name")} type="text" placeholder="Name" />
          <input {...register("email")} type="email" placeholder="Email" />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
*/
