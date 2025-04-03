import { readDoctorData } from "../../models/lib.js";

export const getDoctorById = async (req, res) => {
  const doctorId = req.params.id;

  try {
    const doctors = JSON.parse(await readDoctorData());
    const result = doctors.filter((doctors) => doctors.doctorId === doctorId);
    if (result.length > 0) {
      res.status(200).send({ stauts: "success", data: result });
    } else {
      res.status(404).send({ msg: "Doctor not found" });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
