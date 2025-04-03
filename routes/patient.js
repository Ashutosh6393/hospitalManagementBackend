import { Router } from "express";
import {
  deletePatientById,
  updatePatientById,
  getAllPatients,
  getPatientById,
  addNewPatient,
} from "../controllers/index.js";

const router = Router();

router.route("/").get(getAllPatients).post(addNewPatient);

router
  .route("/:id")
  .get(getPatientById)
  .put(updatePatientById)
  .delete(deletePatientById);

export default router;