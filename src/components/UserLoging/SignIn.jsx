import { useReducer } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import axios from "axios";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeInput":
      return { ...state, [action.field]: action.value };

    default:
      return state;
  }
};

const SignIn = () => {
  const isMobile = useMediaQuery("(max-width: 600px");

  console.log("isMobile in Sign in", isMobile);

  const isDesktop = useMediaQuery("(max-width: 786px");

  console.log("isDesktop in Sign in", isDesktop);

  const initialValue = { UserEmail: "", UserPassword: "" };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleChange = (e) => {
    dispatch({
      type: "changeInput",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const { UserEmail, UserPassword } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signin",
        { email: UserEmail, password: UserPassword }
      );

      console.log("respons", response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="  text-center ">
      <div className="bg-slate-200 m-80 p-10 rounded-xl">
        <h2 className="p-5 text-2xl font-semibold">Sign In</h2>
        <form className=" " onSubmit={handleSubmit}>
          <div className="p-3">
            <input
              type="email"
              name="UserEmail"
              defaultValue={UserEmail}
              onChange={handleChange}
              placeholder="Enter Email"
              required
              className="border-2 p-2 w-72 text-lg m-1 rounded-md bg-white"
            />
          </div>
          <div className="">
            <input
              type="password"
              name="UserPassword"
              defaultValue={UserPassword}
              onChange={handleChange}
              placeholder="Enter Password"
              required
              className="border-2 p-2 w-72 text-lg m-1 rounded-md bg-white"
            />
          </div>
          <button
            className="p-2 px-28 text-base font-semibold text-white bg-blue-600 hover:bg-green-500 m-5 rounded-xl"
            type="submite"
          >
            Sign In
          </button>
        </form>

        <Link to="/">
          <p className="mt-5 underline underline-offset-1 text-blue-700 hover:text-lime-500 text-lg font-medium">
            Create a new Account
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
