import React, {useState} from 'react'
import img from '../pics/icona.png'
import '../css/check.css'



function Check() {

    const [number, setnumber] = useState()

    const handleClick = (e) => {
        var num = document.getElementById('number').value;
        console.log(num);
        setnumber(num);
        // e.preventDefault();
    }

    return (
        <>
            <div className='check d-flex justify-content-evenly mt-5'>
                <div className="card" style={{ width: "23rem" }}>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                            <form>
                        <h5 className="card-title"><label htmlFor="number" className="form-label"></label>Enter Contact Details</h5>
                        <p className="card-text">
                                <div className="mb-3">
                                    
                                    <input type="text" className="form-control" id="number" />
                                </div>
                        </p>
                            </form>
                        <a href={`/status/${number}`} onClick={handleClick} className="btn btn-dark">Check Status</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Check