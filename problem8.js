let g = prompt("x =");
let g1 = Number(g);
while(isNaN(g1)){
    g = prompt("Enter a number");
    g1 = Number(g);
}
if(g1%2 === 0){
    alert(g1 + " is an even number");
}
else{
    alert(g1 + " is an odd number");
}