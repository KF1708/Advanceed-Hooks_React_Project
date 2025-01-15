import { useReducer } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

const fromReducer = (state, action) => {
  switch (action.type) {
    case "changeInput":
      return { ...state, [action.field]: action.value };
    case "reset":
      return { name: "", email: "" };

    default:
      return state;
  }
};

const Reducer = () => {
  const isMobile = useMediaQuery("(max-width: 600px");

  console.log("isMobile from Reduser", isMobile);

  const initialValue = { name: "", email: "" };

  const [state, dispatch] = useReducer(fromReducer, initialValue);

  const handleChange = (e) => {
    dispatch({
      type: "changeInput",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const { name, email } = state;

  //   console.log("state", state);

  const handleReset = () => {
    dispatch({
      type: "reset",
    });
  };

  return (
    <div className="bg-cover bg-red-200 h-screen text-center py-10">
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Type your name"
        className="border-2 p-2 text-lg w-80 m-2 rounded-md"
      />
      <br />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Type your email"
        className="border-2 p-2 w-80 text-lg m-2 rounded-md"
      />

      <br />

      <p className="pb-5 pt-5 font-medium text-lg">Name: {name}</p>
      <p className="pb-5 font-medium text-lg">Email: {email}</p>

      <br />

      <button
        className="text-lg font-semibold bg-orange-500 hover:bg-green-700 p-2 rounded-md"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Reducer;
