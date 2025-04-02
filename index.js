import express from "express";
import { logRequest } from "./middlewares";


const app = express();
const port = process.env.PORT || 3000;

// Middlewares

app.use(express.json());
app.use(logRequest);


//Routes

app.use('/patient', patientRouter);
app.use('/doctor', doctorRouter);
app.use('/appointments', appointmentsRouter);



app.listen(3000, ()=>{
    console.log(`Server started on port ${port}`);
})