export interface Diagnosis{
	id: string;
	name: string;
	latin?: string;
	healthCheckRating?: number;
	date?:string;
}

export interface Patient{
	id: string;
	ssn: string;
	name: string;
	occupation: string;
	gender: 'male'|'female';
	dateOfBirth: string;
}

export type PateintWithoutSSN = Omit<Patient, 'ssn'>;


