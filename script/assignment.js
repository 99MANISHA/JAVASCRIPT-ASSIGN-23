'use strict';

//Assignment 1
console.log('-----------Assignment 1----------')
var jeffMass=65;
var jeffHeight=6;

var toddMass=75;
var toddHeight=5.2;

function calculateBmi(mass,height)
{
    return mass/(height*height);
}

var jeffBMI = calculateBmi(jeffMass,jeffHeight);

var toddBMI = calculateBmi(toddMass,toddHeight);

console.log('BMI of Jeff '+jeffBMI);
console.log('BMI of Todd '+toddBMI);

var bool

jeffBMI > toddBMI ? bool= true : bool = false

console.log('is Jeff’s BMI higher than Todd’s true? ' +bool)

//Assignment 2
console.log('-----------Assignment 2----------')

var heathScore = [89, 120, 103]
var zaneScore = [116, 94, 123]

function calculateAvg(score)
{
    let sum=0
    
    for(let i=0; i<score.length; i++)
        {
            sum = sum + score[i]
        }
    return sum
}

var heathAvg= calculateAvg(heathScore)/heathScore.length;

var zaneAvg= calculateAvg(zaneScore)/zaneScore.length;

heathAvg > zaneAvg ? console.log('Heath is the winner team with average score '+heathAvg) : console.log('Zane is the winner team with average score '+zaneAvg)

let newHeathScore = [...heathScore, 125]
let newZaneScore = [...zaneScore, 45]

var newHeathAvg= calculateAvg(newHeathScore)/newHeathScore.length;

var newZaneAvg= calculateAvg(newZaneScore)/newZaneScore.length;

if(newHeathAvg === newZaneAvg)
    {
        console.log('Heath and Zane both draw');
    }
else{
newHeathAvg > newZaneAvg ? console.log('Heath is the new winner team with average score '+newHeathAvg) : console.log('Zane is the new winner team with average score '+newZaneAvg)
}


