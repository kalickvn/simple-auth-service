import { request } from "express";
import Appointment from "../models/appointmentModels.js";
const makeAppointment = async (req, res) => {
  try {
      
      console.log(req.body);
      const createdAppointment = new Appointment({
        name: req.body.name,
        // always store the hashedPassword!
        phone: req.body.phone,
        date: req.body.date,
        time: req.body.time,
        description: req.body.description
        
      });
      await createdAppointment.save();
  
    } catch (error) {
      console.error(error);
      // client sent bad request and not expected in the server!
      return res.status(400).json({
        message: "Some thing went wrong from server",
      });
    }
  
    res.status(201).json({
      message: "Bad request"
    });
};
export { makeAppointment };