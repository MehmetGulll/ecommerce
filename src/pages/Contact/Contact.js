import React from 'react'
import './contact.scss';
function Contact() {
  return (
    <div className='contact-container'><br></br>
      <form>
        <label>Full Name</label><br></br><br></br>
        <input type = 'text' maxLength={30}></input><br></br><br></br>
        <label>E-mail</label><br></br><br></br>
        <input type = 'email' maxLength={30}></input><br></br><br></br>
        <label>Subject</label><br></br><br></br>
        <textarea maxLength={500}></textarea><br></br><br></br>
        <button type = 'button' className='contactButton'>Send</button>
      </form>
    </div>
  )
}

export default Contact
