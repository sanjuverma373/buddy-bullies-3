import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Hadersection from './Components/Hadersection';
import Mintingsection from './Components/Mintingsection';
import Mapsection from './Components/Mapsection';
import Roadmapsection from './Components/Roadmapsection';
import Accordionsec from './Components/Accordionsec';
import Teamsection from './Components/Teamsection';
import Footersection from './Components/Footersection';


function App() {
  return (
    <div>
     <Hadersection />
     <Mintingsection/>
     <Mapsection/>
     <Roadmapsection/>
    <Accordionsec/>
    <Teamsection/>
    <Footersection/>
    </div>
  );
}

export default App;
