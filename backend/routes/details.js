const express = require('express');
const router = express.Router();
const Details = require('../models/Details');

router.post('/scheduleAppointment',async (req,res)=>{
    console.log(req.body);
    try{
   
    Details.create({
        number: req.body.number,
        pname: req.body.pname,
        page: req.body.page,
        hospital: req.body.hospital,
        doctorName: req.body.doctorName,
        doctorAge: req.body.doctorAge,
        doctorContact: req.body.doctorContact,
        date: req.body.date
      }).then(user => res.json(user));
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

router.get('/checkAppointmentStatus/:number',async (req,res)=>{
    console.log(req.body);
    try{
        const num = req.params.number;
        console.log(num);
        const user = await Details.findOne({number:num});
        console.log(user);
        res.send(user);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})


module.exports = router;