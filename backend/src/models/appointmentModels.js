// models/Appointment.js
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
  service: { type: String, default: 'Plumbing' },
  status:{type:String, enum:['open','received', 'inprogress', 'payment requested', 'done'], default: 'open'},
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);