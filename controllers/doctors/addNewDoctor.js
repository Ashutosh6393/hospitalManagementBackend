import { readDoctorData, writeDoctorData } from "../../models/lib.js";

export const addNewDoctor = async (req, res) => {
  try {
    let doctors = JSON.parse(await readDoctorData());
    //validate req.body
    doctors.push(req.body);
    await writeDoctorData(doctors);
    res.status(200).send({ msg: "success" });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
