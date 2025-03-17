import { Router } from "express";
import { getAllWithoutSSN } from "../services/patientsServices";
const router = Router();

router.get('/',(_req, res)=>{
	res.send(getAllWithoutSSN());
});

export default router;