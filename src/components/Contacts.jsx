import React from 'react'

const Contacts = () => {
  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label >Name</label>
            <input type="text" required placeholder='Enter Your Name' />
          </div>
          <div>
            <label >Email</label>
            <input type="email" required placeholder='Enter Your Email' />
          </div>
          <div>
            <label >Message</label>
            <input type="text" required placeholder='Tell us about your Query' />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
      
    </div>
  )
}

export default Contacts
