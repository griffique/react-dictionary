import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <h1>📖 Dictionary App </h1>

          <h3>What word do you want to look up?</h3>
        </header>
        <Dictionary />
      </div>
    </div>
  );
}

export default App;
