import { Router } from "express";
import {
  getAllDoctors,
  addNewDoctor,
  getDoctorById,
  updateDoctorById,
  deleteDoctorById,
} from "../controllers/index.js";

const router = Router();

router.route("/").get(getAllDoctors).post(addNewDoctor);

router
  .route("/:id")
  .get(getDoctorById)
  .put(updateDoctorById)
  .delete(deleteDoctorById);


export default router;
