import express from "express";
import exerciseCalculator from "./exerciseCalculator";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', ( _ , res)=>{
    return res.send("hello");
});

app.get("/bmi", (req, res) => {
  let { height, weight } = req.query;
  if (!height || !weight) {
    return res
      .status(400)
      .send("Not enough data: both weight and height is required");
  }
  const heightNum = Number(height);
  const weightNum = Number(weight);
  if (isNaN(heightNum) || isNaN(weightNum)) {
    return res.status(400).send("height and weight both should be number");
  }

  if (heightNum <= 0 || weightNum <= 0) {
    throw new Error("Height and weight must be positive");
  }

  const heightInMeters = heightNum / 100;
  const bmi = weightNum / (heightInMeters * heightInMeters);
  if (bmi < 18.5) {
    return res.send("underweight");
  } else if (bmi >= 18.5 && bmi < 25) {
    return res.send("normal") ;
  } else if (bmi >= 25 && bmi < 30) {
    return res.send("overweight");
  } else {
    return res.send("obese");
  }
});

app.post('/exercise', (request, response) =>{
    try{
    console.log("request body:",request.body);
    const {daily_exercises, target} = request.body;
    
    if(!daily_exercises || !target){
      return response.status(400).send("not enough argumnets: daily_arguments and target");
    }
      const parsedArgs = exerciseCalculator.parseArguments({...daily_exercises, ...target});
      const result = exerciseCalculator.exerciseCalculator(parsedArgs);
      return response.status(200).send(result);
    }catch(error){
      return response.status(400).json({error:"error occured"+error.message});
    }

})



app.listen(PORT, () => {
  console.log("running on port:", PORT);
});
