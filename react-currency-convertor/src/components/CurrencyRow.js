import React from "react";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  const data = [...new Set(currencyOptions)];
  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {data.map((option) => (
          <option key={`${option}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
