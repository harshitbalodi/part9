import { patients } from "../../data/pateints";
import { PateintWithoutSSN } from "../types";

export const getAllWithoutSSN = ():PateintWithoutSSN[]=>{
	return patients.map(({id, name, dateOfBirth, gender, occupation})=>({id, name, dateOfBirth, gender, occupation}));
}; 