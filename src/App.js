import './App.css';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
