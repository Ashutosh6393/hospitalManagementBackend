import express from "express";
const app = express();
const port = process.env.PORT || 3000;



// Middlewares

app.use(express.json());


//Routes

app.use('/patient', patientRouter);
app.use('/doctor', doctorRouter);
app.use('/appointments', appointmentsRouter);



app.listen(3000, ()=>{
    console.log(`Server started on port ${port}`);
})