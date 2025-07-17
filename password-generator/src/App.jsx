import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function App() {
  const [length, setLength] = useState(8);
  const [numeric, setNumeric] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

    const displayToast = (text,dur) =>{
    Toastify({
      text: text,
      duration: dur
    }).showToast();
  }

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numeric) {
      string += "0123456789";
    }
    if (char) {
      string += "!@#$%^&*-_+=[]{}";
    }

    for (let index = 0; index < length; index++) {
      let c = Math.floor(Math.random() * string.length);
      pass += string.charAt(c);
    }

    setPassword(pass);
  }, [length, numeric, char, setPassword]);

  useEffect(()=>{
    passwordGenerator()

  },[length,numeric,char,passwordGenerator])

  return (
    <div className="bg-gray-900 h-screen text-black text-4xl">
      <div className="flex flex-col justify-center p-7 items-center">
        <div className="bg-green-300 flex justify-center p-7 rounded-xl font-medium">
          Password Generator
        </div>
        <div className="flex w-full items-center text-orange-400 bg-gray-600 p-5 mt-7 rounded-lg">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="password"
            className="w-full bg-white rounded-lg p-4"
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white shrink-0 p-4 rounded-lg ml-3 cursor-pointer" onClick={()=>{
            window.navigator.clipboard.writeText(password);
            passwordRef.current.select();
            displayToast("Copied to Clipboard",2000)
          }}>
            copy
          </button>
        </div>
        <div className="flex text-orange-500 gap-20">
          <div className="flex gap-3">
            <input
              type="range"
              min={8}
              max={35}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numeric}
              onChange={(e) => {
                setNumeric((prev) => {
                  const newValue = !prev;
                  console.log(`NUMERIC: previous was ${prev}, now ${newValue}`);
                  return newValue;
                });
              }}
            />
            <label htmlFor="">Numeric</label>
          </div>
          <div className="flex gap-3">
            <input
              type="checkbox"
              id="charInput"
              defaultChecked={char}
              onChange={(e) => {
                setChar((prev) => {
                  const newValue = !prev;
                  console.log(`Char: previous was ${prev}, now ${newValue}`);
                  return newValue;
                });
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
