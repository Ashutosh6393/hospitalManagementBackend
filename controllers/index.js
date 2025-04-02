import { getAllAppointments } from "./appointments/getAllAppointments";
import { getAppointmentById } from "./appointments/getAppointmentById";
import { deletePatientById } from "./patients/deletePatientById";
import { updatePatientById } from "./patients/updatePatientById";
import { bookAppointment } from "./appointments/bookAppointment";
import { deleteDoctorById } from "./doctors/deleteDoctorById";
import { updateDoctorById } from "./doctors/updateDoctorById";
import { getAllPatients } from "./patients/getAllPatients";
import { getPatientById } from "./patients/getPatientById";
import { addNewPatient } from "./patients/addNewPatient";
import { getAllDoctors } from "./doctors/getAllDoctors";
import { getDoctorById } from "./doctors/getDoctorById";
import { addNewDoctor } from "./doctors/addNewDoctor";

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
