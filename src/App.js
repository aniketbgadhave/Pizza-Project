
import Home from './pages/Home'
import Navb from './components/Navb';
import 'bootstrap/dist/css/bootstrap.min.css';
import Herose from './components/Herose';
import PizzaColl from './components/PizzaColl';


function App() {
  return (
    <div className="App">
      <Navb/>
      <Herose/>
      <PizzaColl/>
      {/* <Home/> */}
      
    </div>
  );
}

export default App;
