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
        <footer className="footer">
          {" "}
          <p>
            {" "}
            <a href="https://github.com/griffique"> Open-Source Code</a> by{" "}
            <a href="https://nifty-wilson-61230a.netlify.app/">Quinn Griffin</a>{" "}
            🐱‍🚀
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
