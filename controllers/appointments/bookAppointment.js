import { readAppointmentData, writeAppointmentData } from "../../models/lib.js";
export const bookAppointment = async (req, res) => {
  const newAppointment = req.body;

  try {
    let appointment = JSON.parse(await readAppointmentData());
    appointment.push(newAppointment);
    await writeAppointmentData(appointment);

    res.status(200).send({ msg: "Appointment Booked Successfully" });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }

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
