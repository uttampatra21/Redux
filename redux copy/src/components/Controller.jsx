import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store";
const Controller = () => {
  const dispatch = useDispatch();
  const inputVal = useRef();
  const handelIncrmnt = () => {
    dispatch(counterAction.incriment());
  };

  const handelDecrmnt = () => {
    dispatch(counterAction.decrement());
  };

  const handelAddition = () => {
    dispatch(counterAction.addition({ num: Number(inputVal.current.value) }));
    num: Number((inputVal.current.value = ""));
  };

  const handelSubstract = () => {
    dispatch(
      counterAction.subtraction({ num: Number(inputVal.current.value) })
    );
    num: Number((inputVal.current.value = ""));
  };

  return (
    <div>
      <div className="flex justify-center mt-4 md:mt-6">
        <a
          onClick={handelIncrmnt}
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          +1
        </a>
        <a
          onClick={handelDecrmnt}
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
        >
          -1
        </a>
      </div>

      <div className="flex mt-4 md:mt-6">
        <input type="text" ref={inputVal} className="w-12 mx-2 text-2xl" />
        <a
          onClick={handelAddition}
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </a>
        <a
          onClick={handelSubstract}
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
        >
          Sub
        </a>
      </div>
    </div>
  );
};

export default Controller;
