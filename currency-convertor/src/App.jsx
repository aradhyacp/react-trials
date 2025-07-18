import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr")
  const [result,setResult] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo);
  const swap = () =>{
    setFrom(to)
    setTo(from)
  }
  const convert = () =>{
    if (!currencyInfo[to]) return;
    setResult(amount*currencyInfo[to])
  }

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg?cs=srgb&dl=pexels-steve-1006060.jpg&fm=jpg&w=5184&h=2968&_gl=1*13omp1n*_ga*MTA4NjQ1NzA4Ny4xNzUyODYyMjY0*_ga_8JE65Q40S6*czE3NTI4NjIyNjMkbzEkZzEkdDE3NTI4NjIyOTQkajI5JGwwJGgw')`
            }}
        >
            <div className="w-full">
                <div className="w-[50%] mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={result}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                amountDisabled={true}
                                selectCurrency={to}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
