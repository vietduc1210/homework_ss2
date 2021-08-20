let n = prompt("Enter a number");
let m = Number(n);
let factorial = 1;
while(isNaN(m)){
    n = prompt("Enter a number");
    m = Number(n);
}

for(let i=1; i<=m; i++){
    factorial*=i;
}
alert("The factorial of " + m + " is "+ factorial);
