import { useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);

  const focusButton = () => {
    inputRef.current.focus();
  };

  console.log("inputRef", inputRef);

  return (
    <div className=" bg-cover bg-orange-300 h-screen text-center py-52">
      <input
        type="text"
        placeholder="Type something..."
        ref={inputRef} //We assign the ref to the input element. Now,  inputRef.current will point to that DOM element.
        className="border-2 rounded-md p-1 "
      ></input>
      <br />
      <button
        className="bg-lime-300 p-1 m-1 font-medium rounded-sm"
        onClick={focusButton} //When the button is clicked, focusInput is called, and inputRef.current.focus() is executed, focusing on the input field.
      >
        Focus the button
      </button>
    </div>
  );
};

export default Ref;
