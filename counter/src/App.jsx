import { useEffect, useState } from "react";
import "./App.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function App() {
  const [counter, setCounter] = useState(5);
  const [classColor, setclassColor] = useState("");
  const addValue = () => {
    console.log(counter);
    if(counter>=20){
      Toastify({
      text: "Cant go more than 20 !",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))",
      }
    }).showToast();
    return
    }
    setCounter(counter + 1);
    setclassColor("green");
    Toastify({
      text: "Added +1",
      duration: 1000,
      style: {
        background:
          "linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))",
      },
    }).showToast();
  };

  const minusValue = () => {
    if(counter<=0){Toastify({
      text: "Cant go less than 0 !",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))",
      }
    }).showToast();
  return;
  }
    setCounter(counter - 1);
    setclassColor("red");
    Toastify({
      text: "Reduced -1",
      duration: 1000,
      style: {
        background: "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))",
      }
    }).showToast();
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
