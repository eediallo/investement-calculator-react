import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <p>
            <label htmlFor="initial-investment">Initial Investment</label>
            <input
              id="initial-investment"
              name="initial-investment"
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(e) => onChange("initialInvestment", e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="annual-investment">Annual Investment</label>
            <input
              id="annual-investment"
              name="annual-investment"
              type="number"
              required
              value={userInput.annualInvestment}
              onChange={(e) => onChange("annualInvestment", e.target.value)}
            />
          </p>
        </div>

        <div>
          <p>
            <label htmlFor="expected-return">Expected Return</label>
            <input
              id="expected-return"
              name="expected-return"
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(e) => onChange("expectedReturn", e.target.value)}
            />
          </p>

          <p>
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              name="duration"
              type="number"
              required
              value={userInput.duration}
              onChange={(e) => onChange("duration", e.target.value)}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
