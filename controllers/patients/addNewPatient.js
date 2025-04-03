import { readPatientData, writePatientData } from "../../models/lib.js";

export const addNewPatient = async (req, res) => {
  try {
    let patients = JSON.parse(await readPatientData());
    //validate req.body
    patients.push(req.body);
    await writePatientData(patients);
    res.status(200).send({ msg: "success" });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
