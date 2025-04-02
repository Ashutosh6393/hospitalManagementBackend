import { Router } from "express";
import {
  addNewPatient,
  updatePatientById,
  getAllPatients,
  getPatientById,
  deletePatientById,
} from "../controllers";

const router = Router();

router.route("/").get(getAllPatients).post(addNewPatient);

router
  .route("/:id")
  .get(getPatientById)
  .put(updatePatientById)
  .delete(deletePatientById);
