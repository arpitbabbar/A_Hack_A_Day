import React, {useEffect, useState} from 'react'
import '../css/status.css'

function Status() {

    // const [nunu, setnumber] = useState();
    const [data, setdata] = useState({pname:'',hospital:'',doctorName:'',date:''});
    
    // const [data, setdata] = useState([]);
    // const [id, setid] = useState("");

    

    // const onLoad = () => {
    //     let numb;
    // console.log(window.location.pathname);
    // var arr = window.location.pathname.split("/");
    // console.log(arr[2]);
    // numb = arr[2];
    // setid(numb);
    // }

    // setnumber(numb)
    // console.log(nunu);
    

    const getDetails = async () => {
        // console.log( + " getdeatils");
          const response = await fetch("http://localhost:3001/api//checkAppointmentStatus/8901904401");
           console.log(response);
            const json = await response.json();
          //   res.send(json);
            console.log(json);
            setdata(json);
            console.log(data.hospital)
      }
       

      useEffect(() => {
        //   onLoad();
        getDetails();
      }, [])
      


    return (
        <>
            <div className='status d-flex justify-content-evenly mt-5'>
            <div className="card" style={{ width: "20rem" }}>
                    {/* <img src={img} className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title">Your Appointment Schedule</h5>

                        
                            <p className="card-text">
                            Name:- {data.pname} <br />
                            Hospital Name:- {data.hospital} <br />
                            Doctor Name:- {data.doctorName}<br />
                            Date:- 2022-03-10 <br />
                    </p>
                        
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Status