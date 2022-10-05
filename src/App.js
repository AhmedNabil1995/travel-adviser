import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Map from './components/Map/Map';
import List from './components/SideBar/List';
import { useState } from 'react';
function App() {

  let [filteredPlaces,setFilteredPlaces] = useState([]);
  let [ChildClicked,setChildClicked] = useState([]);
  let [bounds,setBounds] = useState({ne:{lat:'11.847676',lng:'108.473209'},sw:{lat:'109.149359',lng:'12.838442'}});

  return (
    <div className="App">
      <NavBar />
      <div className='mycontainer'>
      <div className='row'>
        <div className='col-md-4'>
          <List filteredPlaces={filteredPlaces} setFilteredPlaces={setFilteredPlaces} bounds={bounds}/>
        </div>
        <div className='col-md-8'>
          <Map setChildClicked={setChildClicked} filteredPlaces={filteredPlaces} setFilteredPlaces={setFilteredPlaces} bounds={bounds} setBounds={setBounds}/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
