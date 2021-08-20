let age = prompt("How old are you?");
let age1 = Number(age);
while(isNaN(age)){
    age = prompt("Enter a number");
    age1 = Number(n);
}
if(age1<=14){
    alert("You are not old enough to view this content")
}
else{
    alert("Enjoy!")
}