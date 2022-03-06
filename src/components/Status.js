import React from 'react'
import '../css/status.css'

function Status() {
    return (
        <>
            <div className='status d-flex justify-content-evenly mt-5'>
            <div className="card" style={{ width: "20rem" }}>
                    {/* <img src={img} className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title">Your Appointment Schedule</h5>
                        <p className="card-text">
                                Name:- <br />
                                Hospital Name:- <br />
                                Doctor Name:- <br />
                                Date:- <br />
                        </p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Status