import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Header from "./components/Header";

function App() {
  const [length, setLength] = useState(8);
  const [numeric, setNumeric] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const displayToast = (text, dur) => {
    Toastify({
      text: text,
      duration: dur,
    }).showToast();
  };

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

  useEffect(() => {
    passwordGenerator();
  }, [length, numeric, char, passwordGenerator]);

  return (
    <div className="bg-[#122117] h-screen text-white text-4xl">
      <Header />
      <div className="flex flex-col justify-center p-7 items-center">
        <div className="flex justify-center p-7 rounded-xl font-medium">
          Password Generator
        </div>
        <div className="flex w-[1000px] mt-6">
          <label className="flex w-full content-center">
            <div className="flex w-[80%]">
              <input
                type="text"
                value={password}
                readOnly
                placeholder="password"
                ref={passwordRef}
                className="form-input flex w-full flex-1 min-w-0 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 bg-[#1b3124] border border-[#366348] focus:border-[#366348] h-14 placeholder:text-[#96c5a9] p-[15px] rounded-r-none border-r-0 pr-2"
              />
              <div
                className="flex items-center border border-[#366348] bg-[#1b3124] border-l-0 rounded-xl rounded-l-none text-[#96c5a9] cursor-pointer w-10 hover:text-[#4bdc8b] transition-colors"
                data-icon="Copy"
                data-size="24px"
                data-weight="regular"
                onClick={() => {
                  window.navigator.clipboard.writeText(password);
                  passwordRef.current.select();
                  displayToast("Copied to Clipboard", 2000);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
                </svg>
              </div>
            </div>
          </label>
        </div>
        <div className="flex gap-20 mt-20 flex-col">
          <div className="flex w-[1000px] gap-5 items-center">
            <div className="flex">Password Length</div>
            <input
              type="range"
              min={8}
              max={22}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="w-[50%] ml-20 rounded cursor-pointer"
            />
            <div className="flex ml-3">{length}</div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numeric}
              className="h-7 w-7 appearance-none border-2 border-[#366348] bg-transparent checked:bg-[#38e07b] checked:border-[#38e07b] focus:outline-none cursor-pointer rounded checked:bg-[url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(18,33,24)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')]
    bg-no-repeat bg-center hover:border-[#4bdc8b]"
              onChange={(e) => {
                setNumeric((prev) => {
                  const newValue = !prev;
                  console.log(`NUMERIC: previous was ${prev}, now ${newValue}`);
                  return newValue;
                });
              }}
            /> <div className="flex">Include Numbers</div>
          </div>
          <div className="flex flex-row items-center gap-5">
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
              className="h-7 w-7 appearance-none border-2 border-[#366348] bg-transparent checked:bg-[#38e07b] checked:border-[#38e07b] focus:outline-none cursor-pointer rounded checked:bg-[url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(18,33,24)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3e%3c/svg%3e')]
    bg-no-repeat bg-center hover:border-[#4bdc8b]"
            /> <div className="flex">Include Special Characters</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
