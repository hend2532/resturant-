
import './App.css';
import About from './component/About';
import Explore from './component/Explore';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Reviews from './component/Reviews';

function App() {
  return (
    <div className="App">
   <NavBar/>
   <Home/>
   <About/>
   <Explore/>
   <Reviews/>
   <div className="footer">made with ❤ by Hend Hany</div>
    </div>
  );
}

export default App;
