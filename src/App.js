import './App.css';
import Header from './components/Header';
import StoreListing from './components/StoreListing';
import TopBar from './components/TopBar';


function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <StoreListing />
    </div>
  );
}

export default App;
