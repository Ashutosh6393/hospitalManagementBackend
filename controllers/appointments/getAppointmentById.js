import { readAppointmentData } from "../../models/lib.js";

export const getAppointmentById = async (req, res) => {
  const appointmentId = req.params.id;

  try {
    const data = JSON.parse(await readAppointmentData());
    const result = data.filter(
      (appointment) => appointment.appointmentId === appointmentId
    );
    if (result.length > 0) {
      res.status(200).send({ status: "success", data: result });
    } else {
      res.status(404).send({ msg: "Appointment not found" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ msg: `Error getting appointment: ${error.message}` });
  }
};
