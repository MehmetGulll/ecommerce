import React from 'react'
import { useContext,useEffect,useState } from 'react'
import GlobalContext from '../../context/GlobalStates.js'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {NavLink} from 'react-router-dom';
import './card.scss';
function Card({drawer,setDrawer,buy,setBuy}) {
    const {basket,setBasket} = useContext(GlobalContext);
    const [totalMoney,setTotalMoney] = useState(0);
    const handleNavigation = ()=>{
        setDrawer(!drawer);
        setBuy(!buy);
    }
    const handleProductMinus=(itemId)=>{
        let newCart = [...basket.cart];
        let itemIndex = newCart.findIndex(item=>item.id=== itemId);
        if(newCart[itemIndex].count>0){
            newCart[itemIndex].count -=1;
            setTotalMoney(totalMoney-newCart[itemIndex].money);
        }
        if(newCart[itemIndex].count===0){
            newCart.splice(itemIndex,1);
        }
        setBasket({...basket, cart:newCart});
        localStorage.setItem('cart',JSON.stringify(newCart));
    }
    const handleProductPlus = (itemId)=>{
        let newCart = [...basket.cart];
        let itemIndex = newCart.findIndex(item=>item.id ===itemId);
        newCart[itemIndex].count +=1;
        setTotalMoney(totalMoney+newCart[itemIndex].money*newCart[itemIndex].count);
        localStorage.setItem('cart',JSON.stringify(newCart));
    }
    useEffect(()=>{
        const cartFromStorage  = localStorage.getItem('cart');
        if(cartFromStorage){
            setBasket({...basket, cart : JSON.parse(cartFromStorage)});
        }
    },[]);
    useEffect(()=>{
        const money = basket.cart.reduce((acc,item)=>acc+item.money*item.count,0);
        setTotalMoney(money);
    },[basket.cart]);
  return (
    <div className='container'>
        <div className='cardContainer'>
            <h1 className='textColor'>MyBasket</h1>
            <AiOutlineCloseCircle onClick={()=>setDrawer(!drawer)} className='textColor closeIcon'></AiOutlineCloseCircle>
        </div>
        <div className='addProducts'>
            {
                basket.cart.map((item)=>(
                    <div className='showProducts' key = {item.id}>
                        <img src = {item.img} alt = ""></img>
                        <div className='amountEffect'>
                            <button className='textColor productPlus' onClick={()=>handleProductPlus(item.id)}>+</button>
                            <span className='textColor itemCount'>{item.count}</span>
                            <button className='textColor productMinus' onClick={()=>handleProductMinus(item.id)}>-</button>
                            <NavLink to = '/buy' className='textColor buy' onClick={handleNavigation} >Buy</NavLink>
                        </div>
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default Card
