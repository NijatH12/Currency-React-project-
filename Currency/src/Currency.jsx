import React, { useState } from "react";
import "./css/style.css";
import axios from "axios";

let URL =
  "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_jYhiLWDTtpefFgGBzpPI8zOqCrVYrh6TELFcE3Rx";
function Currency() {
  const [amount, setAmount] = useState("0");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState("0");

  const exchange = async () => {
    const response = await axios.get(`${URL}&base_currency=${fromCurrency}`);
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };
  return (
    <div className="container">
      <div className="title">Currency Converter</div>

      <div className="Currency">
        <input
          type="number"
          className="inputFrom"
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          name=""
          id="fromCurrency"
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="TRY">TRY</option>
          <option value="EUR">EUR</option>
        </select>

        <select
          name=""
          id="toCurrency"
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <input type="number" value={result} className="inputTo" />
      </div>

      <div className="convertor">
        <button className="btnConvertor" onClick={exchange}>
          Convert
        </button>
      </div>
    </div>
  );
}

export default Currency;
