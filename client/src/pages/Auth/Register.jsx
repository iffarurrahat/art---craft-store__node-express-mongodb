import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-8 sm:px-10">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 font-bold">
          Register Please
        </h2>
        <p className="w-11/12 md:w-9/12 text-gray-800 mb-6 text-sm">
          welcome to the smart sight system for well deports register as a
          member to experience
        </p>
        <form>
          <div>
            <label className="mb-1 text-sm">Name</label> <br />
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              className="border px-4 py-2 rounded w-full md:w-2/3 placeholder:text-xs focus:outline-none "
            />
          </div>
          <div className="my-2">
            <label className="mb-1 text-sm">Photo</label> <br />
            <input
              required
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="border px-4 py-2 rounded w-full md:w-2/3 placeholder:text-xs focus:outline-none "
            />
          </div>
          <div>
            <label className="mb-1 text-sm">Email</label> <br />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="border px-4 py-2 rounded w-full md:w-2/3 placeholder:text-xs focus:outline-none "
            />
          </div>
          <div className="mt-2 relative md:inline-block min-w-0 md:w-2/3">
            <label className="mb-1 text-sm">Password</label> <br />
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="border px-4 py-2 rounded w-full placeholder:text-xs focus:outline-none"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 top-5 flex items-center pr-3 cursor-pointer"
            >
              {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
          <div className="mt-5 md:w-2/3">
            <input
              type="submit"
              value="Create Account"
              className="bg-blue-600 text-white text-sm rounded py-3 w-full cursor-pointer placeholder:text-2xl"
            />
          </div>
        </form>
        {registerError && (
          <p className="text-red-600 text-sm mt-1">{registerError}</p>
        )}
        <p className="mt-5 text-xs">
          Already a member ?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
