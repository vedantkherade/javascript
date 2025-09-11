 = 4;
let sp = n - 1;
let st  = 1;

for(let i=1; i<=n; i++){
    for(let j=1; j<=sp; j++){
        process.stdout.write(" ");
    }
    for(let k=1; k<=st; k++){
         process.stdout.write("*");
    }
    sp--;
    st += 2;
    console.log();
}