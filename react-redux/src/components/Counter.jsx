import React from "react";
import { useSelector } from "react-redux";
const Counter = () => {
  const value = useSelector((store) => store.counter);
  return (
    <div>
      <span className="text-2xl text-gray-500 dark:text-gray-400">{value}</span>
    </div>
  );
};

export default Counter;
