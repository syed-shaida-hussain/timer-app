import './App.css'
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [counterId, setCounterId] = useState(null);

  useEffect(() => {
    if (isTimerStarted) {
      setCounterId(
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000)
      );
    }
  }, [count, isTimerStarted]);

  const onStart = () => {
    setIsTimerStarted(true);
  };

  const onStop = () => {
    clearTimeout(counterId);
    setIsTimerStarted(false);
  };

  const reset = () => {
    clearTimeout(counterId);
    setCount(0);
    setIsTimerStarted(false);
  };

  return (
    <div className="App">
      <h1>Count {count}</h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

