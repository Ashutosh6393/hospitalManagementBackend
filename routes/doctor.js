import { Router } from "express";
import {
  getAllDoctors,
  addNewDoctor,
  getDoctorById,
  updateDoctorById,
  deleteDoctorById,
} from "../controllers";

const router = Router();

router.route("/").get(getAllDoctors).post(addNewDoctor);

router
  .route("/:id")
  .get(getDoctorById)
  .put(updateDoctorById)
  .delete(deleteDoctorById);
