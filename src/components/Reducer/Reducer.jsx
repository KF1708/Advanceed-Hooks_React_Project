import { useReducer } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

const fromReducer = (state, action) => {
  //A function that takes two arguments: the current state and an action. It returns the new state based on the action.

  //The function uses a switch statement to decide how to handle the action based on its type.
  switch (action.type) {
    case "changeInput":
      //The ...state spreads the existing properties of the current state into a new object.
      // [action.field] is a dynamic key, meaning it uses the field property from the action to determine which field in the state to update.

      return { ...state, [action.field]: action.value };
    case "reset":
      return { name: "", email: "" }; //Resets the state to its initial state, where both name and email are empty strings.

    default: //Ensures that if the action type is not recognized, the reducer returns the current state unchanged. This prevents unintentional state mutations.
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
      //Use the dispatch function to trigger updates based on user input or other events

      type: "changeInput", //The action object typically contains a type property (what kind of action to perform)
      field: e.target.name, //The other relevant data (field, value).
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
