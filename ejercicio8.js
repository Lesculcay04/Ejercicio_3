let word=["i","h","a","n","A"];
word.length;
let j=word.length-1;
for(let i=0;i<word.length/2-1;i++){
    aux=word[i];
    word[i]=word[j];
    word[j]=aux;
    j=j-1;
}
console.log(word);