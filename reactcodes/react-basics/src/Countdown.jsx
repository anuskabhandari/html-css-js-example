import { useState, useEffect } from "react";

function Countdown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) return;

    const interval = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}

export default Countdown;