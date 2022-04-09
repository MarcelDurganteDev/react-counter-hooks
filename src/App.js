import { useState } from "react";

export default function App () {
  
  const [count, setCount] = useState( 0 );

  function increment () {
    setCount(count + 1)
  }

  function decrement() {
      setCount(count - 1);
  }
  
  return (
    <section>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </section>
  );
}