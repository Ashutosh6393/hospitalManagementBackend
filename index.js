import express from "express";
import appointmentRouter from "./routes/appointment.js";
import { logRequest } from "./middlewares/index.js";
import patientRouter from "./routes/patient.js";
import doctorRouter from "./routes/doctor.js";

const app = express();
const port = process.env.PORT || 3000;

// Middlewares

app.use(express.json());
app.use(logRequest);

//Routes

app.use("/appointments", appointmentRouter);
app.use("/patient", patientRouter);
app.use("/doctor", doctorRouter);

app.listen(3000, () => {
  console.log(`Server started on port ${port}`);
});
