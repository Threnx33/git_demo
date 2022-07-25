import "./App.css";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <button onClick={() => alert("M-ai apasat")}>Press me</button>
    </div>
  );
}

export default App;
