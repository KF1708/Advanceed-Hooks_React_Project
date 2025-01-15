import { useState } from "react";

const ChildrenRendering = () => {
  console.log("rendered!");

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  console.log("Child Render", count);

  return (
    <button
      className="text-lg font-medium bg-blue-400 p-2 rounded-md hover:bg-red-400"
      onClick={handleClick}
    >
      You pressed this button {count} times
    </button>
  );
};

export default ChildrenRendering;
