import { getAllAppointments } from "./appointments/getAllAppointments.js";
import { getAppointmentById } from "./appointments/getAppointmentById.js";
import { deletePatientById } from "./patients/deletePatientById.js";
import { updatePatientById } from "./patients/updatePatientById.js";
import { bookAppointment } from "./appointments/bookAppointment.js";
import { deleteDoctorById } from "./doctors/deleteDoctorById.js";
import { updateDoctorById } from "./doctors/updateDoctorById.js";
import { getAllPatients } from "./patients/getAllPatients.js";
import { getPatientById } from "./patients/getPatientById.js";
import { addNewPatient } from "./patients/addNewPatient.js";
import { getAllDoctors } from "./doctors/getAllDoctors.js";
import { getDoctorById } from "./doctors/getDoctorById.js";
import { addNewDoctor } from "./doctors/addNewDoctor.js";

export {
  deletePatientById,
  addNewPatient,
  getAllPatients,
  getPatientById,
  updatePatientById,
  updateDoctorById,
  addNewDoctor,
  deleteDoctorById,
  getAllDoctors,
  getDoctorById,
  getAllAppointments,
  getAppointmentById,
  bookAppointment,
};
