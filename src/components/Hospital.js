import React from 'react'
import '../css/hospital.css'
import img1 from '../pics/hospital,_green.jpg'
import img2 from '../pics/download.jpg'
import img3 from '../pics/images.png'

function Hospital() {

    var data = [
        {name:"Vision_Eye_Care", pic:img1, special: "Eye Specialist", contact:"+918974563210"},
        {name:"Sharma_Homeopathic", pic:img2, special: "Homeopathic", contact:"+918965213044"},
        {name:"Jain_Dental_Clinic", pic:img3, special: "Dental", contact:"+9198545213044"}
    ];

    return (
        <>
        <div className='hospital'>
        <h1>Hospitals in your Area</h1>
        <div className=' d-flex justify-content-evenly mt-5'> 
        {data.map((element)=>{
            return(
            <div className="card" key={element.name} style={{width: "20rem", padding: "1rem"}}>
            <img src={element.pic}  height={200} width={200} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{element.name} </h5>
                    <p className="card-text">
                        Speciality:- {element.special} <br />
                        Contact:- {element.contact}
                        </p>
                    <a href={`/${element.name}/doctors`} className="btn btn-primary">View Doctors</a>
                </div>
        </div>
        )})}
        </div>
        </div> 
        </>
    )
}

export default Hospital