let nums=[0,0,0,0];
let x=prompt("Ingrese un numero");
nums.length;
let j=nums.length-1;
for(let i=0;i<nums.length;i++){
    nums[j]=x;
    x=x*2;
    j=j-1;
}
console.log(nums);