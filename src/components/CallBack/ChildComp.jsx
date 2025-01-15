import React from "react";

// eslint-disable-next-line react/prop-types
const ChildComp = ({ handleInceament }) => {
  console.log("Child Component is called");

  return (
    <div>
      <button
        className="bg-blue-400 p-2 m-2 rounded-md hover:bg-red-400 font-medium"
        onClick={handleInceament}
      >
        Increase from Child component
      </button>
    </div>
  );
};

export default React.memo(ChildComp); // Prevents unnecessary re-renders of ChildComp
