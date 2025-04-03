import { readDoctorData } from "../../models/lib.js";

export const getAllDoctors = async (req, res) => {
  try {
    const data = await readDoctorData();
    res.status(200).send({
      status: "OK",
      data: JSON.parse(data),
    });
  } catch (error) {
    res.status(500).send({ status: "Error", message: error.message });
  }
};
