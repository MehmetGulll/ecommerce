import React from 'react'
import './home.scss';
import { NavLink } from 'react-router-dom';
function Home() {
  return (
    <div className='home-container'>
      <div className='homeTitle'>Welcome to My Shopping</div>
      <div className='allPage'>
        <NavLink to = '/about' className='aboutPage'>
          <p className='pTitle'>About</p>
          <p className='pText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </NavLink>
        <NavLink to = '/contact' className='contactPage'>
          <p className='pTitle'>Contact</p>
          <p className='pText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </NavLink>
        <NavLink to = '/products' className='productPage'>
          <p className='pTitle'>Product</p>
          <p className='pText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </NavLink>
      </div>
    </div>
  )
}

export default Home
