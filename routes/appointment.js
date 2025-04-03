import { Router } from "express";
import {
  bookAppointment,
  getAllAppointments,
  getAppointmentById,
} from "../controllers/index.js";

const router = Router();

router.route("/").get(getAllAppointments).post(bookAppointment);

router.route("/:id").get(getAppointmentById);

export default router;
