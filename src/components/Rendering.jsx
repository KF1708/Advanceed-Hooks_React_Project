import { useEffect, useRef, useState } from "react";
import ChildrenRendering from "./ChildrenRendering";

const Rendering = () => {
  const [value, setValue] = useState(0);
  const previousValueRef = useRef(0);
  const countRef = useRef(null);

  const increaseValue = () => {
    //useRef is used to store a count value that is incremented without triggering a re-render.
    countRef.current++;
    setValue(value + 1);
  };

  useEffect(() => {
    //The useRef Hook can also be used to keep track of previous state values
    previousValueRef.current = value;
  }, [value]);

  console.log("countRef in Rendering:", countRef.current);

  return (
    <div className="bg-cover bg-yellow-200 h-screen text-center py-52">
      <p className="text-lg font-medium p-1">Current Value : {value}</p>
      <p className="text-lg font-medium">
        Previous Value: {previousValueRef.current}
      </p>
      <br />
      <button
        onClick={increaseValue}
        className="bg-lime-400 p-2 m-1 font-medium rounded-md hover:bg-purple-400"
      >
        Increase Value
      </button>
      <br /> <br />
      <ChildrenRendering />
    </div>
  );
};

export default Rendering;
