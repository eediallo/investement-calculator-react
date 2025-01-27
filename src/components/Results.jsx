import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  let results = []
  calculateInvestmentResults(input, results);
  const initialInverstment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <section id="result">
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
          {results.map((result) => {
            let totalInterest =
              result.valueEndOfYear -
              result.annualInvestment * result.year -
              initialInverstment;
            const totalAmountInversted = result.valueEndOfYear - totalInterest;
            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInversted)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
