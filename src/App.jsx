import { useState } from "react";
import Header from "./Header";
import { calculateInvestmentResults } from "./util/investment";
import { formatter } from "./util/investment";
import UserInput from "./components/UserInput";

function Result({ annualData, totalInterest }) {
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
            <td>
              {formatter.format(
                totalInterest && (totalInterest += data.interest)
              )}
            </td>
            <td>{formatter.format(data.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  return (
    <>
      <Header />
      <UserInput />
    </>
  );
}

export default App;
