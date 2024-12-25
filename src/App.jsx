import { useState } from "react";
import Card from "./Card";
import { useForm } from "react-hook-form";

function App() {
  let [users, setUsers] = useState([]);
  let { register, handleSubmit, reset } = useForm();

  function addUserHandler(data) {
    setUsers([...users, data]);
    reset();
  }

  return (
    <>
      <form
        className="w-full m-2 flex justify-center"
        onSubmit={handleSubmit(addUserHandler)}
      >
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className="p-2 outline-none border mr-2 rounded-lg"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="p-2 outline-none border mr-2 rounded-lg"
        />
        <input
          {...register("image")}
          type="text"
          placeholder="Image"
          className="p-2 outline-none border mr-2 rounded-lg"
        />
        <input
          type="submit"
          value="Add User"
          className="px-6 py-2 bg-black text-white mr-2 rounded-lg"
        />
      </form>
      <div className="flex gap-3 flex-wrap items-center justify-center mx-auto w-full h-screen">
        {users.length > 0 ? (
          users.map((user, index) => (
            <Card
              key={`${user.name}_${index}`}
              name={user.name}
              email={user.email}
              img={user.image}
            />
          ))
        ) : (
          <h1>No Users</h1>
        )}
      </div>
    </>
  );
}

export default App;
