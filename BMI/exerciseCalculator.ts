interface descriptionValues {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number,
}

interface daysValue{
    monday:number,
    tuesday:number,
    wednesday : number, 
    thursday : number,
    friday : number,
    saturday : number,
    sunday:number,
    target: number
} 

const parseArguments = (args:string[]): daysValue => {
    console.log(args);
    if(args.length < 10) throw new Error("Not enough arguments");
    if(args.length > 10) throw new Error("Too many arguments");
    if(
        !isNaN(Number(args[2])) && !isNaN(Number(args[3])) && !isNaN(Number(args[4])) &&
        !isNaN(Number(args[5])) && !isNaN(Number(args[6])) && !isNaN(Number(args[7])) && 
        !isNaN(Number(args[8])) && !isNaN(Number(args[9]))
    ){
        return {
            monday: Number(args[2]),
            tuesday: Number(args[3]),
            wednesday : Number(args[4]), 
            thursday : Number(args[5]),
            friday : Number(args[6]),
            saturday : Number(args[7]),
            sunday: Number(args[8]),
            target: Number(args[9])
        }
    }else{
        throw new Error("Provided values were not numbers");
    }
};

const exerciseCalculator = ({monday, tuesday, wednesday, thursday, friday, saturday, sunday, target}: daysValue):descriptionValues =>{
    const totalWorkoutHours = monday + tuesday + wednesday + thursday +  friday + saturday;
    let trainingDays = 0;
    trainingDays += monday > 0 ? 1:0;
    trainingDays += tuesday > 0 ? 1:0;
    trainingDays += thursday > 0 ? 1:0;
    trainingDays += wednesday > 0 ? 1:0;
    trainingDays += friday > 0 ? 1:0;
    trainingDays += saturday > 0 ? 1:0;
    trainingDays += sunday > 0 ? 1:0;
    return {
        periodLength: 7,
        trainingDays,
        success: totalWorkoutHours/7 >= target,
        rating: 2,
        ratingDescription: totalWorkoutHours/7 >= target ?"You have cross your target": "not too bad but could be better",
        target,
        average:totalWorkoutHours/7
    }
}


try{
    const parsedArgs = parseArguments(process.argv);
    const result = exerciseCalculator(parsedArgs);
    console.log(result);
}catch(error:unknown){
    let errorMessage = "somethinghappened!"
    if(error instanceof Error){
        errorMessage += error.message;
    }
    console.log(errorMessage);
}

