import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Container from "../../components/ui/Container";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { RiErrorWarningFill } from "react-icons/ri";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { userLogin, loginWithGoogle, loginWithFacebook, setUser } = useAuth();
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //when user login navigate the path
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //reset error
    setLoginError("");

    userLogin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          toast.success("Login Successfully");
        }

        // ----
        setUser(result.user);

        // navigate user
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errMessage = error.message;
        if (errMessage === "Firebase: Error (auth/invalid-credential).") {
          setLoginError("Email or Password might be wrong");
        } else if (
          errMessage === "Firebase: Error (auth/network-request-failed)."
        ) {
          setLoginError("Please connect your internet");
        } else {
          setLoginError(error.message);
        }
      });
  };

  //signIn with google
  const handleLoginWithGoogle = () => {
    //reset error
    setLoginError("");

    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          toast.success("Login Successfully");

          //navigate user
          navigate(location?.state || "/");
        }
      })
      .catch((error) => {
        const errMessage = error.message;
        if (errMessage === "Firebase: Error (auth/popup-closed-by-user).") {
          setLoginError("Sign in cancelled. Please try again.");
        } else if (errMessage === "Firebase: Error (auth/internal-error).") {
          setLoginError("Please connect your internet");
        } else if (
          errMessage ===
          "Firebase: IdP denied access. This usually happens when user refuses to grant permission. (auth/user-cancelled)."
        ) {
          setLoginError("Permission denied, Grant access to signin");
        } else {
          setLoginError(errMessage);
        }
      });
  };

  // signin with facebook
  const handleLoginWithFacebook = () => {
    loginWithFacebook()
      .then((result) => {
        const loggedUser = result.user;

        if (loggedUser) {
          toast.success("Login Successfully");

          // navigate user
          navigate(location?.state || "/");
        }
      })
      .catch((error) => {
        const errMessage = error.message;
        if (errMessage === "Firebase: Error (auth/popup-closed-by-user).") {
          setLoginError("Sign in cancelled. Please try again.");
        } else if (errMessage === "Firebase: Error (auth/internal-error).") {
          setLoginError("Please connect your internet");
        } else if (
          errMessage ===
          "Firebase: IdP denied access. This usually happens when user refuses to grant permission. (auth/user-cancelled)."
        ) {
          setLoginError("Permission denied, Grant access to signin");
        } else {
          setLoginError(errMessage);
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Login || Art & Craft</title>
      </Helmet>
      <Container>
        <div className="flex justify-center items-center w-full min-h-screen">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 font-bold text-center">
              Welcome Back
            </h2>
            <p className="md:w-3/5 mx-auto text-center text-gray-800 mb-6 text-sm px-2 sm:px-4 md:px-6 lg:px-0">
              Welcome back to Smart Sight System. Log in to continue your
              personalized experience and services.
            </p>
            <div className="flex justify-center w-full mx-auto">
              <form onSubmit={handleLogin} className="w-4/5 sm:w-3/5 md:w-1/2">
                <div>
                  <label className="mb-1 text-sm">Email</label> <br />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border px-4 py-2 w-full rounded placeholder:text-xs focus:outline-none "
                  />
                </div>
                <div className="mt-2 relative">
                  <label className="mb-1 text-sm">Password</label> <br />
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="border px-4 py-2 w-full rounded placeholder:text-xs focus:outline-none "
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 top-5 flex items-center pr-3 cursor-pointer"
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </span>
                  {/* forget password */}
                  {/* <PasswordResetModal /> */}
                </div>
                <div className="mt-5">
                  <input
                    type="submit"
                    value="Login"
                    className="bg-blue-600 text-white text-sm rounded py-3 w-full cursor-pointer placeholder:text-2xl"
                  />
                </div>
                {loginError && (
                  <p className="text-red-600 mt-1 text-sm flex items-center gap-1">
                    <RiErrorWarningFill />
                    {loginError}
                  </p>
                )}
              </form>
            </div>

            <div className="flex items-center mx-auto gap-3 my-5 w-4/5 sm:w-3/5 md:w-1/2">
              <span className="border w-full"></span>
              <p className="text-sm whitespace-nowrap">continue with</p>
              <span className="border w-full"></span>
            </div>
            <div className="w-4/5 sm:w-3/5 md:w-1/2 mx-auto">
              <button
                onClick={handleLoginWithGoogle}
                className="w-full border py-3 rounded flex justify-center items-center gap-2  hover:bg-green-600 hover:text-white transition-colors duration-300 text-xs uppercase"
              >
                <FaGoogle className="text-base" />
                Google
              </button>
              <button
                onClick={handleLoginWithFacebook}
                className="w-full border py-3 rounded flex justify-center items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors duration-300 text-xs uppercase mt-2"
              >
                <FaFacebook className="text-base" />
                Facebook
              </button>
            </div>
            <p className="mt-5 text-xs text-center">
              Need an account ?{" "}
              <Link to="/register" className="text-blue-600 font-semibold">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;

// Firebase: Error (auth/popup-closed-by-user).
