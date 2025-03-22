import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../slice/counterSlice"; // Correct path to your slice

const Counter = () => {
  // Accessing counter value from Redux store
  const count = useSelector((state) => state.counter.value);

  // Dispatch actions
  const dispatch = useDispatch();

  return (
    <>
      <h2>Counter</h2>

      <Button
        variant="warning"
        onClick={() => dispatch(increment())} // Dispatching the increment action
      >
        Increment
      </Button>

      <Button
        variant="info"
        onClick={() => dispatch(decrement())} // Dispatching the decrement action
      >
        Decrement
      </Button>

      <span>{count}</span>

      <Form.Control
        type="number"
        onChange={(e) => dispatch(incrementByAmount(Number(e.target.value)))} // Handling increment by amount
      />

      <Button
        variant="success"
        onClick={() => {
          const value = parseInt(
            document.querySelector("input[type='number']").value
          );
          dispatch(incrementByAmount(value)); // Increment by the number entered in input
        }}
      >
        By Number
      </Button>
    </>
  );
};

export default Counter;
