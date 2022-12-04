import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Item from "./components/Item";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Aggregator from './components/Aggregator';
import FilterBar from './components/FilterBar'
/*
Create our list of data to display on the website using an array of objects
*/
const storeItems = [
  
  {id: 7, name: "MAFIA BOMBER", price: 120.00, type: "JACKETS",gender: false, image: 'assets/samplesFURLO/8.png'},
  {id:5, name: "KEANO CROP", price: 35.00, type: "TEES", gender: true, image: 'assets/samplesFURLO/6.png'},
  {id: 1, name: "GLOBAL TEE", price: 20.00, type: "TEES", gender: true, image: 'assets/samplesFURLO/2.png'},
  {id: 0, name: "KEANO TEE", price: 20.00, type: "TEES", gender: true, image: 'assets/samplesFURLO/1.png'},
  {id: 2, name: "FACE IT! TEE", price: 20.00, type: "TEES",gender: false,image: 'assets/samplesFURLO/3.png'},
  {id: 3, name: "JUMPER NOT FOUND", type: "JACKETS", price: 50.00, gender: true,image: 'assets/samplesFURLO/4.png'},
  {id: 4, name: "EYES WIDE SHUT CROP", price: 35.00, type: "TEES", gender: true, image: 'assets/samplesFURLO/5.png'},
  {id: 6, name: "LO AND BEHOLD SHORT", price: 40.00, type: "PANTS", gender: false, image: 'assets/samplesFURLO/7.png'},
  {id: 8, name: "GLOBAL CROP", price: 35.00, type: "TEES",gender: true,image: 'assets/samplesFURLO/9.png'},
  {id: 9, name: "KEANO DECK", price: 70.00, type: "ACCESSORY", gender: true,image: 'assets/samplesFURLO/10.png'},
  {id: 10, name: "SUNSET DECK", price: 60.00, type: "ACCESSORY", gender: true, image: 'assets/samplesFURLO/11.png'},
  {id: 11, name: "KEANO CAP", type: "ACCESSORY", price: 10.00, gender: true, image: 'assets/samplesFURLO/12.png'},
]





function App() {
  const [cart, setCart] = useState(Array(storeItems.length).fill(0));
  
  // aggregator to keep track of all the items in the cart. 
  const [cartTotal, setCartTotal] = useState(0.00);
  const [type, setType] = useState("all")
  const [itemData, setItemData] = useState([...storeItems]);
  const [gender, setGender] = useState("all")
  const [sort, setSort] = useState(null);

  
  const sorting = (e) => {
    let sortingMethod = e.target.value;
    console.log("sortingMethod", sortingMethod)
    setSort(sortingMethod)
    sort_func()
  }

  function sort_func(){
    let sort_res
    if (sort === "price-lh"){
      console.log("low-hi")
      sort_res = itemData.sort(function(a, b){return a.price - b.price})
      setItemData(sort_res)
    } else{
      console.log("hi-lo")
      sort_res = itemData.sort(function(a, b){return b.price - a.price})
      setItemData(sort_res)
    }
  }


  function incrementCart(index, price){
      cart[index] = cart[index] + 1 || 1;
      setCart({...cart});
      const tot_price = cartTotal + price
      console.log(tot_price)
      setCartTotal(tot_price);
  }

  function decrementCart(index, price){
    if(cart[index] > 0){
      cart[index] = cart[index] - 1
      setCart({...cart})
      const tot_price = cartTotal - price 
      setCartTotal(tot_price)
    }
  }

  function clearCart(){
      setCart(Array(storeItems.length).fill(0));
      setCartTotal(0);
  }

  const selectFilterType = (e) => {
    let newFilter = e.target.value;
    console.log("filter:", newFilter)
    setType(newFilter)
  }

  const selectGenderFilterType = (e) => {
    let newGenderFilter = e.target.value;
    console.log("gender_filter", newGenderFilter)
    setGender(newGenderFilter)
  }

  const matchGenderFilterType = item => {
    if(gender === "all"){
      return true
    } else if (gender === "Womens"){
        console.log("Not match")
        return item.gender
    } else if (gender === "Mens"){
        return !(item.gender)
    }
  }

  const matchTypeFilter = item => {
    if(type == "all"){
      return true
    } else{
      return type === item.type
    }
  }

  
  return (
    <div className="App">
      <div className="header">
      <h1 class="FURLO"> F</h1>
      </div>
      <div>
      
      <FilterBar selectGenderFilterType={selectGenderFilterType} selectFilterType={selectFilterType} sorting={sorting}/>
      <Aggregator tf={storeItems} cart={cart} cartTotal={cartTotal} onClick={clearCart}/>
      
      <div className="wrapper">
        {itemData.map((item, index) => ( // TODO: map bakeryData to   
          matchGenderFilterType(item) &&
          matchTypeFilter(item) &&
          <Item item={item} index={index} onClickAdd={incrementCart} onClickRemove={decrementCart} cart={cart}/>
        ))}
      </div>
      </div> 
    </div>
  );
}

export default App;
