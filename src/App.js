import logo from './logo.svg';
import './App.css';

function App() {

  const sayHello = async () => {
    try {
      const response = await fetch("./.netlify/functions/hello");
      console.log(response.json());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <button
          onClick={sayHello}>
            Hello
        </button>
      </header>
    </div>
  );
}

export default App;
