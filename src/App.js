import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import useAuth from './hooks/useAuth';

function App() {

  const user = "Colin";
  const {
    data: userData,
    loading: userLoading,
    error: userError
  } = useAuth(user)

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
    const response = await fetch("./.netlify/functions/fauna");
    if (!response.ok) {
      const errorText = await response.text();
      console.log(`Error: ${errorText}`);
    }
    const body = await response.json();
    console.log(`User: ${body.data.name}\nCreated: ${body.data.createdAt}`);
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
        {userLoading ? (
            <p>Loading...</p>
          ) : userError ? (
            <p>{userError}</p>
          ) : (
            <p>Welcome, {userData.name}</p>
          )}
        <button
          onClick={sayHello}>
            Say Hello
        </button>
        <button
          onClick={submitMessages}>
            Chat
        </button>
        <button
          onClick={fetchUser}>
            Fetch User
        </button>
      </header>
    </div>
  );
}

export default App;
