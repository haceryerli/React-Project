import React from 'react';
import "./Form.css";

function Form() {
  return (
    <div className='form'>
      <form action="">
        <label>Full Name</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required/>
        <label>Subject</label>
        <input type="text" required/>
        <label>Message</label>
        <textarea required rows="6" placeholder='Type your message...'/>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
