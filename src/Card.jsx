function Card({ name, email, img }) {
  return (
    <>
      <div className="bg-neutral-100 w-36 p-3 rounded-lg text-center">
        <div className="">
          <img
            className="w-12 h-12 object-cover rounded-full inline"
            src={img}
            alt=""
          />
          <h1 className="mt-2">{name}</h1>
          <p className="text-sm text-neutral-800 overflow-hidden text-ellipsis">
            {email}
          </p>
          <p className="text-xs mt-2 text-neutral-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
