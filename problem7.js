let e = prompt("n =");
let g = prompt("x =");
let e1 = Number(e);
let g1 = Number(g);
while(isNaN(e1)){
    e = prompt("Enter a number");
    e1 = Number(e);
}
while(isNaN(g1)){
    g = prompt("Enter a number");
    g1 = Number(g);
}
if(g1<=e1/2){
    alert(g1 + " is lower half of " +e1);
}
else{
    alert(e1 + " is higher half of "+e1);
}