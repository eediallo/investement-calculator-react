import { useState } from "react";
import Header from "./Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isDurationValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <div className="App">
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!isDurationValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {isDurationValid && <Results input={userInput} />}
    </div>
  );
}

export default App;
