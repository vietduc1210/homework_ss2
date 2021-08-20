let n = prompt("Enter a number");
let m = Number(n);
while(isNaN(m)){
    n = prompt("Enter a number");
    m = Number(n);
}
if(m<4.5){
    alert("Lower half of 9");
}
else{
    alert("Higher half of 9");
}