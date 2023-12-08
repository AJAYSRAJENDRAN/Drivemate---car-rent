import logo from './logo.svg';
// import './App.css';
import Router from './Components/Router/Router';
import Landingpage from './Components/Landingpage/Landingpage';
import Admin from './Components/Admin/Admin';
import Cardisplay from './Components/Admin/Cardisplay';
import Signup from './Components/Authentication/Signup';

function App() {
  return (
    <div className="App">
  {/* <Landingpage/> */}
  {/* <Admin/> */}
  {/* <Cardisplay/> */}
  <Router/>
  {/* <Signup/> */}
    </div>
  );
}

export default App;
