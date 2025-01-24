import investementImg from "./assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <div id="header">
      <img src={investementImg} alt="inverstement logo" />
      <h1>Investement Calculator</h1>
    </div>
  );
}
