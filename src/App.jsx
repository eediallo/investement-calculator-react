import Header from "./Header";

function Input({ inputType, label }) {
  return (
    <div id="user-input">
      <label htmlFor={label}>{label}</label>
      <input type={inputType} id={label} />
    </div>
  );
}

function App() {
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
    </>
  );
}

export default App;
