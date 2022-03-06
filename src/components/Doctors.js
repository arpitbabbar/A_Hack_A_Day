import React, { useState } from 'react'
import '../css/doctor.css'

function Doctors() {

    const [details, setdetails] = useState({ name: '', age: '', qual: '', exp: '', contact: '' });
    const [bool4, setbool4] = useState(false)


    console.log(window.location.pathname)
    var array = window.location.pathname.split("/");
    console.log(array[1]);
    var bool1 = false;
    var bool2 = false;
    var bool3 = false;
    // var bool4 = false;

    if (array[1] == "Vision_Eye_Care") {
        bool1 = true;
    }
    else if (array[1] == "Sharma_Homeopathic") {
        bool2 = true;
    }
    else if (array[1] == "Jain_Dental_Clinic") {
        bool3 = true
    }

    var vision = [
        { name: "Dr. Rohit Mehra", age: "31", qual: "MBBS, DOMS", exp: "3 Years", contact: "+918901904401" },
        { name: "Dr. Ankita Mehra", age: "30", qual: "MBBS, DOMS", exp: "2 Years", contact: "+918901904521" }
    ]

    var sharma = [
        { name: "Dr. Harsita Sharma", age: "29", qual: "BHMS", exp: "4 Years", contact: "+918901904521" }
    ]

    var jain = [
        { name: "Dr. Ishan Jain", age: "33", qual: "BDS, MD", exp: "5 Years", contact: "+918901904401" },
        { name: "Dr. Suraj Chauhan", age: "35", qual: "BDS", exp: "7 Years", contact: "+918901904521" },
        { name: "Dr. Ishu Jain", age: "32", qual: "BDS", exp: "5 Years", contact: "+918901904521" }
    ]

    const handleClick = (e) => {
        setbool4(true);
        console.log(bool4);
        var dage = document.getElementById('age');
        var dcontact = document.getElementById('contact').textContent;
        var dqual = document.getElementById('qual').textContent;
        var dexp = document.getElementById('exp').textContent;
        var dname = document.getElementById('name').textContent;
        setdetails({ name: dname, age: dage, exp: dexp, qual: dqual, contact: dqual });
        console.log(dage.textContent);
        console.log(dcontact)
        console.log(dqual)
        console.log(dexp)
        console.log(dname);

    }

    const handleClick2 = () => {

    }


    return (
        <div className='doctor'>
            {bool1 && <h1>Available Doctors in {array[1]}</h1>}
            {bool2 && <h1>Available Doctors in {array[1]}</h1>}
            {bool3 && <h1>Available Doctors in {array[1]}</h1>}

            {bool1 && <div className=' d-flex justify-content-evenly mt-5'>
                {vision.map((element) => {
                    return (
                        <div className="card" key={element.name} style={{ width: "20rem", padding: "1rem" }}>
                            <div className="card-body">
                                <h5 className="card-title"><span id='name'>{element.name}</span> </h5>
                                <p className="card-text">
                                    Age:- <span id='age'>{element.age} </span><br />
                                    Contact:- <span id='contact'>{element.contact}</span> <br />
                                    Qualifications:- <span id='qual'>{element.qual}</span> <br />
                                    Experience:- <span id='exp'>{element.exp} </span>
                                </p>
                                <a onClick={() => handleClick()} className="btn btn-success">Book Appointment</a>
                            </div>
                        </div>
                    )
                })}
            </div>}

            {bool2 && <div className=' d-flex justify-content-evenly mt-5'>
                {sharma.map((element) => {
                    return (
                        <div className="card" key={element.name} style={{ width: "20rem", padding: "1rem" }}>
                            <div className="card-body">
                                <h5 className="card-title"><span id='name'>{element.name}</span> </h5>
                                <p className="card-text">
                                    Age:- <span id='age'>{element.age} </span><br />
                                    Contact:- <span id='contact'>{element.contact}</span> <br />
                                    Qualifications:- <span id='qual'>{element.qual}</span> <br />
                                    Experience:- <span id='exp'>{element.exp} </span>
                                </p>
                                <a onClick={() => handleClick()} className="btn btn-success">Book Appointment</a>
                            </div>
                        </div>
                    )
                })}
            </div>}

            {bool3 && <div className=' d-flex justify-content-evenly mt-5'>
                {jain.map((element) => {
                    return (
                        <div className="card" key={element.name} style={{ width: "20rem", padding: "1rem" }}>
                            <div className="card-body">
                                <h5 className="card-title"><span id='name'>{element.name}</span> </h5>
                                <p className="card-text">
                                    Age:- <span id='age'>{element.age} </span><br />
                                    Contact:- <span id='contact'>{element.contact}</span> <br />
                                    Qualifications:- <span id='qual'>{element.qual}</span> <br />
                                    Experience:- <span id='exp'>{element.exp} </span>
                                </p>
                                <a onClick={() => handleClick()} className="btn btn-success">Book Appointment</a>
                            </div>
                        </div>
                    )
                })}
            </div>}

            {bool4 && <div className='book d-flex justify-content-evenly mt-5'>
                <div className="card" style={{ width: "25rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Book Appointment w {details.name}</h5>
                        <p className="card-text">
                            <form>
                                <div class="mb-3">
                                    <label for="pname" class="form-label">Enter Your Name</label>
                                    <input type="text" class="form-control" id="pname" placeholder='Enter Your Name' />
                                </div>
                                <div class="mb-3">
                                    <label for="pcontact" class="form-label">Enter Contact Details</label>
                                    <input type="text" class="form-control" id="pcontact" placeholder='Enter Contact No.' />
                                </div>
                                <div class="mb-3">
                                    <label for="page" class="form-label">Enter Your Age</label>
                                    <input type="number" class="form-control" id="page" placeholder='Enter Your Age' />
                                </div>
                                <div class="mb-3">
                                    <label for="pdate" class="form-label">Appointment Date</label>
                                    <input type="date" class="form-control" id="pdate" placeholder='Enter Appointment Date' />
                                </div>
                                
                            </form>

                        </p>
                        <a href="#" onClick={handleClick2} className="btn btn-success">Schedule</a>
                    </div>
                </div>
            </div>}




        </div>
    )
}

export default Doctors