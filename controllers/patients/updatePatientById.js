import { readPatientData, writePatientData } from "../../models/lib.js";

export const updatePatientById = async (req, res) => {
  const newData = req.body;
  const patientId = req.params.id;

  const patients = JSON.parse(await readPatientData());

  const updatedPatients = patients.map((patient) =>
    patient.patientId === patientId? {...patient,...newData} : patient
  );

  await writePatientData(updatedPatients);

  res.status(200).json({ message: `Patient with id ${patientId} updated successfully` });



  try {
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while updating the patient." });
  }
};
