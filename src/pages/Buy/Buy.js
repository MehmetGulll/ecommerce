import React from 'react'
import './buy.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react'
import GlobalContext from '../../context/GlobalStates'
function Buy() {
    const {contract,setContract} = useContext(GlobalContext);
  return (
    <div className='buy-container'>
        <form className='buyForm'>
            <input type = "text" placeholder='Name on card' maxLength={30}></input><br></br><br></br>
            <input type = "text" placeholder='Your card number' maxLength={16}></input><br></br><br></br>
            <input type = "text" placeholder='Security code' maxLength={3}></input><br></br><br></br>
            <input type = "checkbox" className="contract" onClick={()=>setContract(!contract)}/>
            <NavLink to='/contract' className='contractText' >I accept to contarct</NavLink><br></br><br></br><br></br>
            <button type = 'button'  className='buyButton'>Buy</button>
        </form>
      {console.log(contract)}
    </div>
  )
}

export default Buy
