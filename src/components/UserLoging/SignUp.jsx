import { useReducer, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import VerifyEmail from "./VerifyEmail";

const SignUp = () => {
  const [isVerify, setIsVerify] = useState(false);

  const isMobile = useMediaQuery("(max-width: 600px)");
  const isDesktop = useMediaQuery("(max-width: 786px)");

  console.log("isMobile in Sign up", isMobile);
  console.log("isDesktop in Sign up", isDesktop);

  const initialValue = { UserName: "", UserEmail: "", UserPassword: "" };

  const fromReducer = (state, action) => {
    switch (action.type) {
      case "changeInput":
        return {
          ...state,
          [action.field]: action.value,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fromReducer, initialValue);

  const handleChange = (e) => {
    // console.log("Field:", e.target.name, "Value:", e.target.value);
    dispatch({
      type: "changeInput",
      field: e.target.name,
      value: e.target.value,
    });
  };
  console.log(state);

  const { UserName, UserEmail, UserPassword } = state;
  // console.log(UserName, UserEmail, UserPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signup",
        { name: UserName, email: UserEmail, password: UserPassword }
      );
      console.log("response", response);
      // console.log(UserEmail);
      if (response?.data?.isOtpSend) {
        setIsVerify(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-cover h-screen bg-white text-center">
      {isVerify ? (
        <VerifyEmail email={UserEmail} />
      ) : (
        <>
          <div className="mt-1 py-2">
            <div className="px-96 mx-40">
              <img src="public/images/logo.png" alt="logo" className="" />
            </div>
            <h2 className="pb-2 text-2xl font-semibold">Sign Up</h2>
            <h2 className="pb-5 font-normal">
              Sign up with user name, email and password{" "}
            </h2>
            <form className="" onSubmit={handleSubmit}>
              <div className="">
                <input
                  name="UserName"
                  type="text"
                  defaultValue={UserName}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter Full Name"
                  required
                  className="border-2 p-1 px-2 w-72 text-lg m-2 rounded-md"
                />
              </div>
              <div className="">
                <input
                  name="UserEmail"
                  type="email"
                  defaultValue={UserEmail}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter Email"
                  required
                  className="border-2 p-1 px-2 w-72 text-lg m-2 rounded-md"
                />
              </div>
              <div className="">
                <input
                  name="UserPassword"
                  type="password"
                  defaultValue={UserPassword}
                  onChange={(e) => handleChange(e)}
                  placeholder="Enter Password"
                  required
                  className="border-2 p-1 px-2 w-72 text-lg m-2 rounded-md"
                />
              </div>
              <div className="place-content-center font-medium mb-3 mt-3 flex gap-5">
                <input type="checkbox" className="w-5" />
                <p>Remember me</p>
              </div>
              <button
                type="submite"
                className="border-2 p-2 w-80 text-base font-semibold text-white bg-black m-2 hover:bg-green-500 rounded-xl"
              >
                Sign In
              </button>
            </form>
            <Link to="/sign-in">
              <p className="p-1 underline underline-offset-1">
                Forgot Password?
              </p>
            </Link>
            <Link to="/sign-in">
              <p className="p-3">
                Need Account
                <span className="p-2 underline underline-offset-1 text-red-500">
                  Sign Up?
                </span>
              </p>
            </Link>
            <div className="px-96 mx-14">
              <div className="flex w-96 bg-black rounded-3xl">
                <div className="m-1 ml-7 ">
                  <h1 className="text-white text-xs">
                    Sign in as Kaniz Fatama
                  </h1>
                  <h1 className="text-white text-xs">
                    kanizfatama17@gmail.com
                  </h1>
                </div>
                <div className="bg-white ml-40 p-1 m-2 rounded-full w-8 h-8 text-2xl">
                  <FcGoogle className="" />
                </div>
              </div>

              <div className="flex w-96 bg-blue-700 rounded-3xl mt-5">
                <div className="bg-white ml-4 p-1 m-2 rounded-full w-8 h-8 text-2xl text-blue-700">
                  <FaFacebookF />
                </div>
                <div className="w-72 mt-4">
                  <h1 className="text-white text-sm">Login with Facebook</h1>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SignUp;
