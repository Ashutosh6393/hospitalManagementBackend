import { readDoctorData, writeDoctorData } from "../../models/lib.js";

export const deleteDoctorById = async (req, res) => {
  const doctorId = req.params.id;
  try {
    const doctors = JSON.parse(await readDoctorData());

    const updatedDoctors = doctors.filter(
      (doctor) => doctor.doctorId !== doctorId
    );

    await writeDoctorData(updatedDoctors);
    res
      .status(200)
      .send({ msg: "successfully deleted doctor: " + req.params.id });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
