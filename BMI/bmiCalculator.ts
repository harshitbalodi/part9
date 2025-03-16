export interface heightAndWeight {
  height: number;
  weight: number;
}

const parser = (args: string[]): heightAndWeight => {
  if (args.length > 4) {
    throw new Error("too many arguments");
  }
  if (args.length < 4) {
    throw new Error("not enough arguments");
  }

  let height: number, weight: number;
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    height = Number(args[2]);
    weight = Number(args[3]);
  } else {
    throw new Error("arguments are not numbers");
  }
  if (height <= 0 || weight <= 0)
    throw new Error("height and weight cannot be 0 or negative");
  return {
    height,
    weight,
  };
};

export const CalculateBmi = ({ height, weight }: heightAndWeight): string => {
  if (height <= 0 || weight <= 0) {
    throw new Error("Height and weight must be positive");
  }
  const heightInMeters = height / 100;
  console.log(heightInMeters);
  const bmi = weight / (heightInMeters * heightInMeters);
  console.log(bmi);

  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal range";
  } else if (bmi >= 25 && bmi < 30) {
    return "overweight";
  } else {
    return "obese";
  }
};

// try {
//   const parsedArgs = parser(process.argv);
//   const result = CalculateBmi(parsedArgs);
//   console.log(result);
// } catch (error: unknown) {
//   if (error instanceof Error) {
//     throw new Error("error occured:" + error.message);
//   }
// }

