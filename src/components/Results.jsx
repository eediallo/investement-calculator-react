import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  let totalInterest = 0;
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
          {resultsData.map((result) => (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format((totalInterest += result.interest))}</td>
              <td>{formatter.format(result.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
