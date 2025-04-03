import path from "path";
import fs from "fs/promises";

const { dirname } = import.meta;

const patientDataPath = path.join(dirname, "\\patients.json");
const doctorDataPath = path.join(dirname, "\\doctors.json");
const appointmentsDataPath = path.join(dirname, "\\appointments.json");

export const readPatientData = async () => {
  try {
    const data = await fs.readFile(patientDataPath, "utf8");
    return data;
  } catch (error) {
    throw new Error(`Error reading patient data: ${error.message}`);
  }
};

export const writePatientData = async (patients) => {
  try {
    await fs.writeFile(patientDataPath, JSON.stringify(patients, null, 2));
    return { status: "success", message: "Patient data updated successfully" };
  } catch (error) {
    throw new Error(`Error writing patient data: ${error.message}`);
  }
};

export const readDoctorData = async () => {
  try {
    const data = await fs.readFile(doctorDataPath, "utf8");
    return data;
  } catch (error) {
    throw new Error(`Error reading doctor data: ${error.message}`);
  }
};

export const writeDoctorData = async (doctor) => {
  try {
    await fs.writeFile(doctorDataPath, JSON.stringify(doctor, null, 2));
    return { status: "success", message: "Doctors data updated successfully" };
  } catch (error) {
    throw new Error(`Error writing doctor data: ${error.message}`);
  }
};

export const readAppointmentData = async () => {
  try {
    const data = await fs.readFile(appointmentsDataPath, "utf8");
    return data;
  } catch (error) {
    throw new Error(`Error reading appointment data: ${error.message}`);
  }
};

export const writeAppointmentData = async (data) => {
  try {
    await fs.writeFile(appointmentsDataPath, JSON.stringify(data, null, 2));
    return {
      status: "success",
      message: "Appointments data updated successfully",
    };
  } catch (error) {
    throw new Error(`Error wrting appointment data: ${error.message}`);
  }
};
