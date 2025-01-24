import { useState } from "react";
import Header from "./Header";


function Input({ inputType, label }) {
  return (
    <div id="user-input">
      <label htmlFor={label}>{label}</label>
      <input type={inputType} id={label} />
    </div>
  );
}

function Result() {
  return (
    <table>
      <tbody>
        <thead>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest(Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </thead>
      </tbody>
    </table>
  );
}

function App() {
  // const [annualData, setAnnualData] = useState()
  return (
    <>
      <Header />
      <div className="input-group">
        <div>
          <Input label="Initial Investment" inputType="text" />
          <Input label="Expected Return" inputType="number" />
        </div>
        <div>
          <Input label="Annual Investment" inputType="text" />
          <Input label="Duration" inputType="text" />
        </div>
      </div>

      <div id="result">
        <Result />
      </div>
    </>
  );
}

export default App;
