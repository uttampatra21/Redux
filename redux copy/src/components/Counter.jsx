import React from "react";
import { useSelector } from "react-redux";
const Counter = () => {
  const counterObj = useSelector((store) => store.counter);
  const counterValue = counterObj.counterVal;
  
  return (
    <div>
      <span className="text-2xl text-gray-500 dark:text-gray-400">
        {counterValue}
      </span>
    </div>
  );
};

export default Counter;
