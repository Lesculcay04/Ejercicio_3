let numbers=[7,8,9,0,2,6];
numbers.length;
let x=prompt("Ingresa el valor a sumar");
for(let i=0; i<numbers.length;i++){
    for(let j=i+1;j<numbers.length;j++){
      if(numbers[i]+numbers[j]==x){
        console.log("Indice",i," e Indice",j);
      }
    }
}