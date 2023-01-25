let number=[3,2,6,8,9,7,11];
number.length;
let cont=0;
for(let i=0;i<number.length;i++){
    if(number[i]%2==1){
        cont=cont+1;
      }
    else{}
}
console.log("Los numeros impares son",cont);