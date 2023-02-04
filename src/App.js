import {BrowserRouter as Router,Routes,Route,NavLink, BrowserRouter,useLocation} from 'react-router-dom'
import Header from './components/Header/Header.js';
import Products from "./components/Products/Product.js"
import About from './pages/About/About.js';
import Card from './pages/Card/Card.js';
import Contact from './pages/Contact/Contact.js'
import Buy from './pages/Buy/Buy.js';
import  GlobalContext, { GlobalProvider } from "./context/GlobalStates";
import { useState,useContext } from 'react';
import Home from './pages/Home/Home.js';
import Contract from './pages/Contract/Contract.js';
function App() {
  const {redirect} = useContext(GlobalContext);
  const [drawer , setDrawer] = useState(false);
  const [buy,setBuy] = useState(false);
  return (
    <div className="App">
      <GlobalProvider>
      <Header drawer = {drawer} setDrawer={setDrawer}/>
      {drawer && <Card drawer={drawer} setDrawer = {setDrawer} buy  = {buy} setBuy = {setBuy}/>}
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/products' element = {<Products/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/buy' element = {<Buy/>}/>
        <Route path = '/contract' element  = {<Contract/>}/>
      </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
