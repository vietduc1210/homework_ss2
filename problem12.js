let n = prompt("Enter number of egdes");
let m = Number(n);
while(isNaN(m)){
    n = prompt("Enter number of egdes");
    m = Number(n);
}
let p =2/m*180;
for(let i=1;i<=m;i++){
    forward(100);
    right(p);
}
