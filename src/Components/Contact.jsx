import React, { useState } from 'react'
import '../styles/Contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {
    const [message,setMessage] = useState('')
    const [isError,setIsError] = useState(false)
   
    function sendEmail(e) {
        e.preventDefault();
       
      
        emailjs.sendForm('service_cwqb89b', 'template_mafoac4', e.target, 'CNYrDw8V-hZhPNoh2')
          .then(() => {
            setMessage('Successfully Sent Thank You.')
             setIsError(false)  
            }, () => {
                setMessage('Failed to Send Try Again.')
                setIsError(true)  
          });
      }
    return (
        <div id='Contact' className="Contact" >
            <h1>Contact  <span>Now</span></h1>
            <form onSubmit={sendEmail}>
                {message && <span className={`Contact__Message ${isError ? 'successMessage' : 'failureMessage'}`}>{message}</span>
                }<div className="inputWrapper">
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" name='name'  required id='name'/>
                </div>
                <div className="inputWrapper">
                    <label htmlFor="email">Email</label> <br />
                    <input type="text"  name='email' required  id='email'/>
                </div>
                <div className="inputWrapper">
                    <label htmlFor="message">Message</label> <br />
                    <textarea   rows='4' name='message'  required id='message'/>
                </div>
                <button className='Contact__Btn'>Submit</button>
            </form>
        </div>
    )
}

export default Contact
