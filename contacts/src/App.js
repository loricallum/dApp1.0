import { useEffect, useState } from 'react';
import Web3 from 'web3';
import './App.css';

function App() {
  const [account, setAccount] = useState(); //state variable to set account

    useEffect(() => {
      async function load() {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
        const accounts = await web3.eth.requestAccounts();

        setAccount(accounts[0]);
      }

      load();
    }, []);

    
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
          Your account is: {account}
        </a>
      </header>
    </div>
  );
}

export default App;
