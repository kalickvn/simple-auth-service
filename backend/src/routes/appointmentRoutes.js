import { Router } from "express";
import {makeAppointment} from "../controllers/appointmentController.js";
import uploadImage from "../middlewares/uploadImage.js";
const appointmentRouter = Router();

appointmentRouter.post("/",uploadImage.single('photo'), makeAppointment);

export {appointmentRouter};