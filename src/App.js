import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="tw-text-2xl tw-font-bold tw-text-cyan-800">
          Tailwind 3 With React Js
        </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="tw-px-6 tw-py-2 tw-text-sm tw-text-white tw-rounded tw-shadow-xl tw-bg-emerald-500">
          Success
        </button>
      </header>
    </div>
  );
}

export default App;
