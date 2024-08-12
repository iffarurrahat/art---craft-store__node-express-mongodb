import { useLoaderData } from "react-router-dom";

const Author = () => {
  const craft = useLoaderData();
  const { email, name, image } = craft?.postUser || {};

  return (
    <div className="flex flex-col justify-center p-6 bg-base-200/30 shadow rounded-xl sm:px-12 md:w-1/2 mx-auto">
      <img
        src={image}
        alt=""
        className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Username: {name === "ali akbor" ? "Atim Akbor" : name}
          </h2>
          <p className="px-5 text-xs sm:text-base text-gray-400">
            Email:{" "}
            {email === "contact.akbor@gmail.com"
              ? "atim.abkor@gmail.com"
              : email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Author;
