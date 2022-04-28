import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Table />
      </div>
    </div>
  );
}

export default App;
