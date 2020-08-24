import React, {useState} from 'react';
import logo from '../assets/logo.svg';

const Header = ({data, optionChange, guestchange, search}) => {

// const [locations, setLocations] = useState([])
//remove duplicates
let hash = {};
const filtered = data.filter(el => {
  const check = hash.hasOwnProperty(el.city);
  return check ? false : hash[el.city] = 1
  
})

//optionChange



return(
  <header>
  <div className="logo">
  <img src={logo} alt="Windbnb" />
  </div>
  <div className="filter">
  <div>
  <select onChange={(e) => optionChange(e.target.value)}>
  {
    filtered.map(item => (
      <option value={item.city}>{item.city}, {item.country}</option>
    ))
  }
  </select>
  </div>
  <div>
  <p className="m-0 p-0">Add Guests
   <input type="number" min="1" max="6" className="mx-2"  onChange={(e)=> guestchange(e.target.value)} /></p>
  
  </div>
  <div><span className="material-icons search"  onClick={search}>
  search
  </span></div>
  
  </div>
  </header>
)
}

export default Header;