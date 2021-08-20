//9.a
for(i=1;i<=6;i++){
    if(i<=3){
        console.log("L");
    }
    else{
        console.log("H");
    }
}

//9.b
let n = prompt("Enter the total number of L's and H's");
let m = Number(n);
while(isNaN(m)){
    n = prompt("Enter the total number of L's and H's");
    m = Number(n);
}
for(i=1;i<=m;i++){
    if(i < m/2 + 1){
        console.log("L");
    }
    else{
        console.log("H");
    }
}

//9.c
for(i=1;i<=8;i++){
    if(i%2 === 1){
        console.log("0");
    }
    else{
        console.log("1");
    }
}

//9.d
let a = prompt("Enter the total number of 0's and 1's");
let b = Number(a);
while(isNaN(m)){
    a = prompt("Enter the total number of 0's and 1's");
    b = Number(a);
}
for(i=1;i<=m;i++){
    if(i%2 === 1){
        console.log("0");
    }
    else{
        console.log("1");
    }
}
