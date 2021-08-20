let n = prompt("How many polygons?");
let m = Number(n);
while(isNaN(m)){
    n = prompt("How many polygons?");
    m = Number(n);
}

for(let i=3;i<=m;i++){
    if(i%2 === 1){
        color("Red");
    }
    else{
        color("Green");
    }
    let p =2/i*180;
    for(let k=1;k<=i;k++){
        forward(100);
        right(p);
    }
}
