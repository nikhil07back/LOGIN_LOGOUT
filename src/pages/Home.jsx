import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <>
         <section className='heading'>
            <h1>What do you need help with?</h1>
            <p>Please choose from an option below</p>
          </section>
    
          <a to='/register' className='btn btn-reverse btn-block'>
             Create New Ticket
          </a>
    
          <a to='/login' className='btn btn-block'>
           View My Tickets
          </a>
   </>
  )
}

export default Home
