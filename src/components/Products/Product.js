import React from 'react'
import { useContext } from 'react'
import GlobalContext from '../../context/GlobalStates'
import lists from '../../JSON/products.json';
import './product.scss';
function Product() {
    const {basket,setBasket,amount,setAmount} = useContext(GlobalContext);
    const amountPlus = (list) => {
      
      const existingItem = basket.cart.find((item) => item.id === list.id);
      localStorage.setItem("cart",JSON.stringify(basket.cart))
      setBasket({
        ...basket,
        cart: existingItem
          ? basket.cart.map((item) => (item.id === list.id ? { ...item, count: item.count + 1 } : item))
          : [...basket.cart, { ...list, count: 1 }],
          
      });
      
     
      setAmount(amount + 1);
    };
  return (
    <div className='product-container'>
        {lists.map((list)=>(
        <div className='product' key = {list.id}>
          <img src = {list.img} alt = "" ></img><br></br>
          <div className='textColor productMoney'>{list.money} TL</div>
          <button onClick={()=>amountPlus(list)}>Add to basket</button>
        </div>
      ))}
    </div>
  )
}

export default Product
