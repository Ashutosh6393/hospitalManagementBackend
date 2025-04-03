import { readPatientData, writePatientData } from "../../models/lib.js";

export const deletePatientById = async (req, res) => {
  const patientId = req.params.id;
  try {
    const patients = JSON.parse(await readPatientData());

    const updatedPatients = patients.filter(
      (patient) => patient.patientId !== patientId
    );

    await writePatientData(updatedPatients);
    res
      .status(200)
      .send({ msg: "successfully deleted patient: " + req.params.id });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
