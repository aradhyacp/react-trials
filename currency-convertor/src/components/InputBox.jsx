import React from 'react'
import { useId } from 'react'

const InputBox = ({label,amount,onAmountChange,onCurrencyChange,currencyOptions=[],selectCurrency="usd",amountDisabled=false,currencyDisabled=false,className=""}) => {
    const amountInputId = useId()
  return (
    <div className={`bg-white p-3 flex rounded-lg ${className}`}>
        <div className="w-1/2 ">
        <label className='text-black/40 mb-2 inline-block' htmlFor={amountInputId}>{label}</label>
        <input id={amountInputId} type="number" className='w-full outline-none bg-transparent py-1.5' placeholder='Amount' disabled={amountDisabled} value={amount} onChange={(e)=>{
            const value = e.target.value;
            onAmountChange?.(value);
        }}/></div>
        <div className="flex w-1/2 flex-wrap justify-end text-right">
            <span className='text-black/40 mb-2 w-full'>Currency Type</span>
            <select className='rounded-lg p-5 bg-gray-100 cursor-pointer outline-none' value={selectCurrency} onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)} disabled={currencyDisabled}>
                {currencyOptions.map((c)=>(
                    <option key={c} value={c}>{c}</option>
                ),)}
            </select>
        </div>
    </div>
  )
}

export default InputBox