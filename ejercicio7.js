let word=["s","a","i","t","a","M"];
word.length;
let j=word.length-1;
for(let i=0;i<word.length/2;i++){
    aux=word[i];
    word[i]=word[j];
    word[j]=aux;
    j=j-1;
}
console.log(word);