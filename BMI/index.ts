import express from "express";
import { CalculateBmi } from "./bmiCalculator";
import { exerciseCalculator, parseArguments } from "./exerciseCalculator.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', ( _ , res)=>{
    return res.send("hello");
});

app.get('/bmi', (req, res) => {
	const { height, weight } = req.query;

	if (!height || !weight) {
		return res.status(400).send("malformatted parameters");
	}

	const heightNum = Number(height);
	const weightNum = Number(weight);

	if (isNaN(heightNum) || isNaN(weightNum)) {
		res.status(400).send("malformatted parameters");
	}

	const result = CalculateBmi({ height: heightNum, weight: weightNum });
	return res.status(200).json(result);
});


app.post('/exercises', (req, res) => {
	try {
		const { daily_exercises, target } = req.body;
		if (!daily_exercises || !target) {
			return res.status(400).send("malformatted parameters");
		}
		const parsedArgs = parseArguments(['0', '0', ...daily_exercises, target]);
		
		const result = exerciseCalculator(parsedArgs);

		return res.status(200).json(result);
	} catch (error: unknown) {
		if (error instanceof Error) {
			return res.status(400).send(error.message);
		}
		return res.status(400).send("malformatted parameters");
	}
});

app.listen(PORT, () => {
	console.log("running on port:", PORT);
});
