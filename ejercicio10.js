let binariNumber=[1,0,1,0];
binariNumber.length;
let j=binariNumber.length-1;
let decimal=0;
let base=prompt("Ingrese la base a convertir")
for(let i=0;i<binariNumber.length;i++){
    binariNumber[j]=binariNumber[j]*base**i;
    decimal+=binariNumber[j];
    j=j-1;
}
console.log(decimal);