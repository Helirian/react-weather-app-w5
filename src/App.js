import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was created by{" "}
          <a
            href="https://github.com/Helirian"
            target="_blank"
            rel="noreferrer"
          >
            Helirian
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Helirian/react-weather-app-w5.git"
            target="_blank"
            rel="noreferrer"
          >
            open-sorced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
