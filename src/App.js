import React,{useState, useEffect} from 'react';
import './App.css';
import data from './data/stays.json';

//components
import Header from './components/Header';
import CardList from './components/Cards';
import Footer from './components/Footer';

function App() {

  //changeLo
const changeLo = (val) => {
setOption(val);
}
//guestchange

const guChange = (val) => {
  setGue(val);
  console.log(gue)
}
//search

const searchHotels = () => {

if(!gue){
  alert("please Add Guests")

} else {
  const localFi = stays.filter( el => el.city === option && el.maxGuests >= gue)
  console.log(localFi);
  setFilter(localFi);
}

}

 //initial data 
  useEffect(()=>{
    readData();
  }, [])

//set data
const[stays, setStays] = useState([]);
const [filtered, setFilter] = useState([]);
const [option, setOption] = useState('Helsinki');
const [gue, setGue] = useState(0);

const readData = () => {
const localData = data.map(item => item);
setFilter(localData);
setStays(localData);
}

//filter


  return (
    <div className="App container">
    <Header data={stays} optionChange={changeLo} guestchange={guChange} search={searchHotels} />
    <div className="info">
    <h2>Stays in Finland</h2>
    <p>{filtered.length} Stays</p>
    </div>
    <CardList pass={filtered} />

    <Footer />
    </div>
  );
}

export default App;
