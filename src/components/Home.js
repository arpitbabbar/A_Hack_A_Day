import React from 'react'
import '../css/home.css'

function Home() {
  return (
      <>
    <div className='home'>
        <h1>Hello Folks!</h1>
        <h1>Welcome to EasyHealth</h1>
        <h3>Your One Step Solution for all Medical Appointments :)</h3>
    </div>
    <div className='buttons d-flex justify-content-around'>
    <a href="/bookappointment" className="button">Book an Appointment</a>
    <a href="#" className="button">Appointment Status</a>

    </div>
    </>
  )
}

export default Home