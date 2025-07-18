import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) =>{
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    const [data,setData] = useState({})
    // useEffect(()=>{
    //     const res = await fetch(url,{
    //         method: "GET",
    //     });
    //     const response = await res.json();
    //     setData(response.currency);
    //     console.log(data);
    // },[currency]);
    useEffect(()=>{
        const fetchCData = async () =>{
            const res = await fetch(url,{
                method: "GET"
            });
            const response = await res.json();
            setData(response[currency]);
            console.log(data);
        }
        fetchCData()
    },[currency])
    console.log(data);
    return data;

}

export default useCurrencyInfo;