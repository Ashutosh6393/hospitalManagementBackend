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
