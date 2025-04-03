import express from "express";
import { logRequest } from "./middlewares/index.js";
import patientRouter from "./routes/patient.js";
import doctorRouter from "./routes/doctor.js";
import appointmentRouter from "./routes/appointment.js"


const app = express();
const port = process.env.PORT || 3000;


const {filename, dirname} = import.meta

// Middlewares

app.use(express.json());
app.use(logRequest);


//Routes

app.use('/patient', patientRouter);
app.use('/doctor', doctorRouter);
app.use('/appointments', appointmentRouter);



app.listen(3000, ()=>{
    console.log(`Server started on port ${port}`);
    console.log(dirname);
})