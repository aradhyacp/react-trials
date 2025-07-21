import React from "react";
import InputBox from "./InputBox";
import { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

const Convertor = () => {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [result, setResult] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(result.toString())
    setResult("")
  };
const convert = () => {
  const numericAmount = parseFloat(amount);
  if (!currencyInfo[to] || isNaN(numericAmount)) return;
  setResult(numericAmount * currencyInfo[to]);
};


  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[50%] justify-center px-4 py-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1 flex flex-col mx-auto">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
            <InputBox
              label="To"
              amount={result}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisabled={true}
              selectCurrency={to}
            />
            <div className="flex flex-row items-center justify-center gap-5 mt-10">
              <button
                type="button"
                className=" rounded-lg bg-[#c7c7c7] text-black px-4 py-3 cursor-pointer"
                onClick={swap}
              >
                SWAP
              </button>
              <button
                type="submit"
                className=" bg-[#1978e5] text-white px-4 py-3 rounded-lg cursor-pointer"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Convertor;
