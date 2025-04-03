import { readDoctorData, writeDoctorData } from "../../models/lib.js";

export const updateDoctorById = async (req, res) => {
  const newData = req.body;
  const doctorId = req.params.id;

  try {
    const doctors = JSON.parse(await readDoctorData());
    const updatedDoctors = doctors.map((doctor) =>
      doctor.doctorId === doctorId ? { ...doctor, ...newData } : doctor
    );
    await writeDoctorData(updatedDoctors);
    res
      .status(200)
      .json({ message: `Doctor with id ${doctorId} updated successfully` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while updating the Doctor." });
  }
};
