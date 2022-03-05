import React from 'react'
import '../css/doctor.css'

function Doctors() {
    console.log(window.location.pathname)
    var array = window.location.pathname.split("/");
    console.log(array[1]);
    var bool1 = false;
    var bool2 = false;
    var bool3 = false;

    if(array[1]=="Vision_Eye_Care"){
        bool1=true;
    }
    else if(array[1]=="Sharma_Homeopathic"){
        bool2=true;
    }
    else if(array[1]=="Jain_Dental_Clinic"){
        bool3=true
    }

    var vision = [
        {name:"Dr. Rohit Mehra", age:"31", qual:"MBBS, DOMS", exp:"3 Years", contact:"+918901904401"},
        {name:"Dr. Ankita Mehra", age:"30", qual:"MBBS, DOMS", exp:"2 Years", contact:"+918901904521"}
    ]

    var sharma = [
        {name:"Dr. Harsita Sharma", age:"29", qual:"BHMS", exp:"4 Years", contact:"+918901904521"}
    ]

    var jain = [
        {name:"Dr. Ishan Jain", age:"33", qual:"BDS, MD", exp:"5 Years", contact:"+918901904401"},
        {name:"Dr. Suraj Chauhan", age:"35", qual:"BDS", exp:"7 Years", contact:"+918901904521"},
        {name:"Dr. Ishu Jain", age:"32", qual:"BDS", exp:"5 Years", contact:"+918901904521"}
    ]


  return (
    <div className='doctor'>
        {bool1 && <h1>Available Doctors in {array[1]}</h1>}
        {bool2 && <h1>Available Doctors in {array[1]}</h1>}
        {bool3 && <h1>Available Doctors in {array[1]}</h1>}

        {bool1 && <div className=' d-flex justify-content-evenly mt-5'> 
        {vision.map((element)=>{
            return(
            <div className="card" key={element.name} style={{width: "20rem", padding: "1rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{element.name} </h5>
                    <p className="card-text">
                        Age:- {element.age} <br />
                        Contact:- {element.contact} <br />
                        Qualifications:- {element.qual} <br />
                        Experience:- {element.exp}
                        </p>
                    <a href="#" className="btn btn-success">Book Appointment</a>
                </div>
        </div>
        )})}
        </div>}

        {bool2 && <div className=' d-flex justify-content-evenly mt-5'> 
        {sharma.map((element)=>{
            return(
            <div className="card" key={element.name} style={{width: "20rem", padding: "1rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{element.name} </h5>
                    <p className="card-text">
                        Age:- {element.age} <br />
                        Contact:- {element.contact} <br />
                        Qualifications:- {element.qual} <br />
                        Experience:- {element.exp}
                        </p>
                    <a href="#" className="btn btn-success">Book Appointment</a>
                </div>
        </div>
        )})}
        </div>}

        {bool3 && <div className=' d-flex justify-content-evenly mt-5'> 
        {jain.map((element)=>{
            return(
            <div className="card" key={element.name} style={{width: "20rem", padding: "1rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{element.name} </h5>
                    <p className="card-text">
                        Age:- {element.age} <br />
                        Contact:- {element.contact} <br />
                        Qualifications:- {element.qual} <br />
                        Experience:- {element.exp}
                        </p>
                    <a href="#" className="btn btn-success">Book Appointment</a>
                </div>
        </div>
        )})}
        </div>}
    </div>
  )
}

export default Doctors