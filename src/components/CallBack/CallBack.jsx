import { useCallback, useState } from "react";
import ChildComp from "./ChildComp";

const CallBack = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    //Memoizes handleIncrement to keep the reference stable, avoiding unnecessary re-renders of ChildComp.
    setCount((prev) => prev + 1);
  }, []); //This means the function is only created once and will not change on re-renders.

  return (
    <div className=" bg-cover bg-emerald-400 h-screen text-center py-52">
      <p className="font-medium text-lg">Count : {count} </p>
      <button
        className="bg-purple-400 p-2 m-2 rounded-md hover:bg-yellow-400 font-medium"
        onClick={incrementCount}
      >
        Increment
      </button>
      <br />
      <br />

      <ChildComp handleInceament={incrementCount} />
    </div>

    //Receives incrementCount as a prop. Since the function reference doesn’t change, ChildComponent will only re-render if another prop changes, avoiding unnecessary re-renders.
  );
};

export default CallBack;
