import { createContext,useEffect,useState } from "react";
import lists from '../JSON/products.json'
const GlobalContext = createContext()
export const GlobalProvider=({children}) =>{
    const [redirect,setRedirect] = useState(false);
    const [color,setColor] = useState(false);
    const [contract, setContract] = useState(false);
    // const [drawer,setDrawer] = useState({
    //     drawerCard : false,
    // });
    const [home,setHome] = useState(false);
    const [basket,setBasket] = useState({
        bookList : lists,
        cart : []
    });
    
    const [amount,setAmount] = useState(0);
    const values = {
        basket,
        setBasket,
        amount,
        setAmount,
        // drawer,
        // setDrawer,
        color,
        setColor,
        home,
        setHome,
        redirect,
        setRedirect,
        contract,
        setContract
        
    }
    return <GlobalContext.Provider value = {values}>{children}</GlobalContext.Provider>
}
export default GlobalContext;