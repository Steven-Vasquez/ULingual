import React from "react";
import './stylesheets/ComingSoon.css';

const ContactPage = () => {
    function SubmitMessage(){ 
        console.log("SubmitForm");
       }
       return (
           <form onSubmit={SubmitMessage()}>
               <div className='layer-1'>
                   <h2>Contact Us</h2>
                   <div className='form-grouping'>
                       <label>Username:</label>
                       <input type={'text'} name="Name" required />
                   </div>
                   <div className='form-grouping'>
                       <label>Email:</label>
                       <input type={'Email'} name="Email" required />
                   </div>
                   
                   <div className='form-grouping'>
                       <label>Message:</label>
                       <textarea name='message'cols='20'rows='10' required ></textarea>
                   </div>
                   <input type={'submit'} value='Submit' />
                   
               </div>
           </form>
       );
    }

export default ContactPage;