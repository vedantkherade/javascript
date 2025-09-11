data = [[1, 2], [3, 4], [5, 6]];

for(let i=0; i<data.length; i++){
    for(let j=0; j<data[i].length; j++){
        if(data[i][j] %2 === 0){
            data[i][j] = 0;
        }
    }        
}
console.log(dat