import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Convertor from "./components/Convertor";

function App() {

  return (
    <div className="">
      <Header />
      <HeroSection />
      <Convertor />
      {/* <div className="w-full">
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
            </div> */}
    </div>
  );
}

export default App;
