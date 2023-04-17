import logo from './logo.svg';
import './App.css';

function App() {

  const sayHello = async () => {
    try {
      const response = await fetch("./.netlify/functions/hello");
      const json = await response.json();
      console.log(`${json.role} says ${json.content}`);
    } catch (error) {
      console.log(error);
    }
  }

  const submitMessages = async () => {
    try {
      const response = await fetch("./.netlify/functions/chat");
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchUser = async () => {
    try {
      const response = await fetch("./.netlify/functions/fauna");
      const json = await response.json();
      console.log(`${json.data.name} says ${json.data.createdAt}`);
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
        <button
          onClick={submitMessages}>
            Chat
        </button>
        <button
          onClick={fetchUser}>
            Chat
        </button>
      </header>
    </div>
  );
}

export default App;
