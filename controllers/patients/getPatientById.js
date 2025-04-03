import { readPatientData, writePatientData } from "../../models/lib.js";

export const getPatientById = async (req, res) => {
  const patientId = req.params.id;

  try {
    const patients = JSON.parse(await readPatientData());
    const result = patients.filter(
      (patient) => patient.patientId === patientId
    );
    if (result.length > 0) {
      res.status(200).send({ stauts: "success", data: result });
    } else {
      res.status(404).send({ msg: "Patient not found" });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
