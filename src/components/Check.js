import React from 'react'
import img from '../pics/icona.png'
import '../css/check.css'



function Check() {
    return (
        <>
            <div className='check d-flex justify-content-evenly mt-5'>
                <div className="card" style={{ width: "23rem" }}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                            <form>
                        <h5 className="card-title"><label for="number" class="form-label"></label>Enter Contact Details</h5>
                        <p className="card-text">
                                <div class="mb-3">
                                    
                                    <input type="text" class="form-control" id="number" />
                                </div>
                        </p>
                            </form>
                        <a href="/status" className="btn btn-dark">Check Status</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Check