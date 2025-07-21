import React from "react";
import { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  const amountInputId = useId();
  return (
    <div className={`flex items-center justify-center gap-4 px-4 py-3 rounded-lg ${className}`}>
        <div className="flex  w-1/2 flex-wrap flex-col">
        <p className="text-[#111418] text-base font-medium leading-normal pb-2">
          Currency
        </p>
        <select
          className="rounded-lg p-4 bg-[#f0f2f4] text-[#111418] cursor-pointer outline-none text-base font-normal leading-normal"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((c) => (
            <option key={c} value={c}>
              {c.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
        <label
          className="flex flex-col flex-1"
          htmlFor={amountInputId}
        >
          <p className="text-[#111418] text-base font-medium leading-normal pb-2">
          {label}
        </p>
        
        <input
          id={amountInputId}
          type="number"
          className="w-[400px] outline-none bg-[#f0f2f4] p-4 rounded-lg"
          placeholder="Enter amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            onAmountChange?.(value);
          }}
        />
        </label>
      
    </div>
  );
};

export default InputBox;
