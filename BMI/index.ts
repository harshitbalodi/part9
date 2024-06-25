import express from "express";
const app = express();
const PORT = 3000;

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
    
})



app.listen(PORT, () => {
  console.log("running on port:", PORT);
});
