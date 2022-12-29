import React, { useState, useEffect } from "react";

function CountUp({ end, isCounterVisible, counterSpeed }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (isCounterVisible) {
      const counterTimeout = setTimeout(() => {
        const accumulator = count + 1;
        setCount(accumulator);
      }, counterSpeed);
      if (count >= end) {
        clearTimeout(counterTimeout);
        setCount(end);
      }
    } else {
      setCount(0);
    }
  }, [count, isCounterVisible, end]);
  return (
    <div>
      <p className="text-5xl">{count}</p>
    </div>
  );
}
export default CountUp;