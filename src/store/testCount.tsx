import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counterSlice";

function Counter() {
    const count = useSelector((state: { counter: { value: number } }) => state.counter.value);
    console.log('alo', count);


  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>
      alo
    </div>
  );
}

export default Counter;
