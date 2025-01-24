import { useState } from "react";
import Header from "./Header";
import { calculateInvestmentResults } from "./util/investment";
import { formatter } from "./util/investment";

function Input({ inputType, label, initialValue, onChangeSelect }) {
  return (
    <div id="user-input">
      <label htmlFor={label}>{label}</label>
      <input
        type={inputType}
        id={label}
        value={initialValue}
        onChange={onChangeSelect}
      />
    </div>
  );
}

function Result() {
  const initialData = [
    {
      initialInvestement: 15000,
      annualInvestment: 900,
      expectedReturn: 6,
      duration: 10,
    },
  ];

  const annualData = calculateInvestmentResults({
    initialInvestment: initialData[0].initialInvestement,
    annualInvestment: initialData[0].annualInvestment,
    expectedReturn: initialData[0].expectedReturn,
    duration: initialData[0].duration,
  });

  let totalInterest = 0;

  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data, index) => (
          <tr key={index}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format((totalInterest += data.interest))}</td>
            <td>{formatter.format(data.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [initialValue, setInitialValue] = useState(null);
  function handleChange(e) {
    setInitialValue(e.target.value);
  }
  // const [annualData, setAnnualData] = useState()
  return (
    <>
      <Header />
      <div className="input-group">
        <div>
          <Input
            label="Initial Investment"
            inputType="text"
            value={initialValue}
            onChangeSelect={handleChange}
          />
          <Input
            label="Expected Return"
            inputType="number"
            value={initialValue}
            onChangeSelect={handleChange}
          />
        </div>
        <div>
          <Input
            label="Annual Investment"
            inputType="text"
            value={initialValue}
            onChangeSelect={handleChange}
          />
          <Input
            label="Duration"
            inputType="text"
            value={initialValue}
            onChangeSelect={handleChange}
          />
        </div>
      </div>

      <div id="result">
        <Result />
      </div>
    </>
  );
}

export default App;
