import { Router } from "express";
import { getDiagnoses } from "../services/diagnosisServices";

const router = Router();

router.get("/", (_req, res) => {
	const allDiagnoses = getDiagnoses();
	res.send(allDiagnoses);
});

export default router;
