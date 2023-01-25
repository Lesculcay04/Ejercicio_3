let numbers=[0,2,4,8];
numbers.length;
for(let i=0; i<numbers.length;i++){
    for(let j=i+1; j<numbers.length;j++){
        console.log(numbers[i],numbers[j]);
    }
}