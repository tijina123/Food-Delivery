import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../src/assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

const Navbar = ({setShowLogin}) => {
 
    const[menu,setMenu] = useState('menu') /*Intializing state variable*/

    const{getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src= {assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to={'/'} onClick={()=>setMenu("home")} className= {menu==="home"?"active":""}>home</Link>    { /* menu = statevariable that initialized above  setMenu is also in the statevariable*/ }
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className= {menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-App")} className= {menu==="mobile-App"?"active":""}>mobile-App</a>
        <a href='#footer' onClick={()=>setMenu("contact us")} className= {menu==="contact us"?"active":""}>contact us</a>
      </ul>
     
      <div className="navbar-right">
        <img src={assets.search_icon} alt=''/>
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt=''/></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=> setShowLogin(true)}>Sign In</button>
    </div>

    </div>
  )
}

export default Navbar