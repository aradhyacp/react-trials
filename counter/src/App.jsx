import { useEffect, useState } from "react";
import "./App.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function App() {
  const [counter, setCounter] = useState(5);
  const [classColor, setclassColor] = useState("");
  const errorGradient =
    "linear-gradient(to right, rgb(255, 56, 73), rgb(255, 104, 104))";
  const addGradient =
    "linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))";
  const removeGradient =
    "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))";

  const displayToast = (text, dur, bg) => {
    Toastify({
      text: text,
      duration: dur,
      style: {
        background: bg,
      },
    }).showToast();
  };

  const addValue = () => {
    console.log(counter);
    if (counter >= 20) {
      displayToast("Cant go more than 20 !", 3000, errorGradient);
      return;
    }
    setCounter(counter + 1);
    setclassColor("green");
    displayToast("Added +1", 1000, addGradient);
  };

  const minusValue = () => {
    if (counter <= 0) {
      displayToast("Cant go less than 0 !", 3000, errorGradient);
      return;
    }
    setCounter(counter - 1);
    setclassColor("red");
    displayToast("Reduced by -1", 1000, removeGradient);
  };

  useEffect(() => {
    if (classColor) {
      const timeout = setTimeout(() => {
        setclassColor("");
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [classColor]);

  return (
    <>
      <h1>Counter example</h1>
      <h2>
        Current value: <span className={classColor}>{counter}</span>
      </h2>
      <div className="button-container">
        <button onClick={addValue}>Increment</button>
        <button onClick={minusValue}>Decrement</button>
      </div>
    </>
  );
}

export default App;
