import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="user-group">
        <p>
          <label htmlFor="Initial Inverstment">Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="Annual Inverstment">Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="Expected return">Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="Duration">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
