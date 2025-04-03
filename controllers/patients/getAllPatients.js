import { readPatientData } from "../../models/lib.js";
export const getAllPatients = async (req, res) => {
  try {
    const data = await readPatientData();
    res.status(200).send({
      status: "OK",
      data: JSON.parse(data),
    });
  } catch (error) {
    res.status(500).send({ status: "Error", message: error.message });
  }
};
