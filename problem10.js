let weight = prompt("Your weight in kg?");
let height = prompt("Your height in cm");
let kg = Number(weight);
let cm = Number(height)
while(isNaN(kg)){
    weight = prompt("Your weight in kg?");
    kg = Number(weight);
}
while(isNaN(cm)){
    height = prompt("Your height in cm");
    cm = Number(height);
}
cm = cm/100
let bmi = kg/(cm*cm);
alert("Your BMI is " + bmi.toFixed(1));
if(bmi<16){
    alert("You are severely underweight");
}
if(16<=bmi<18.5){
    alert("You are underweight");
}
else if(18.5<=bmi<25){
    alert("You are normal");
}
else if(25<=bmi<30){
    alert("You are over weight");
}
else{
    alert("You are obese");
}