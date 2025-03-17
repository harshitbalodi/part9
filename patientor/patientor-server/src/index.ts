import express from 'express';
import DiagnosisRouter from './routes/diagnosis';
import PatientRouter from './routes/patients';
import cors from 'cors';
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get('/api/ping',(_req, res)=>{
	res.status(200).send("pong");
});

app.use('/api/diagnosis', DiagnosisRouter);
app.use('/api/patients', PatientRouter);

app.listen(PORT,()=>{
	console.log(`Server is running on port ${PORT}`);
});