import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "./Action";

export const Display = () => {
  //useSelector hook is used to used the state
  const state = useSelector((state) => state);

  //useDispatch function is used to dispatch the action
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        Number of Cake :{" "}
        {state.numOfItems > 0 ? state.numOfItems : "Can't buy stock is over"}{" "}
      </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};
