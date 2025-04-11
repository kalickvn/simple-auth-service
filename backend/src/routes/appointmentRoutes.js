import { Router } from "express";
import {makeAppointment} from "../controllers/appointmentController.js"
const appointmentRouter = Router();

appointmentRouter.post("/", makeAppointment);

export {appointmentRouter};