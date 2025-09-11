function bubbleSort(){
    for(let i=n-1; i>=1; i--){
        let isSwapped = false;
        for(let j=0; j<=i-1; j++){
            if(arr[j] > arr[j+1]){
               [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; 
               isSwapped = true;     //swap
            }
        }
        if(isSwapped == false){
            break;
        }
        console.log("running");
    }
}

let arr = [7, 5, 9, 2, 8];
let n = arr.length;
bubbleSort();
consol