let word=["a","o","l","h"];
word.length;
let j=word.length-1;
let i=0;
if(i<word.length){
    aux=word[i];
    word[i]=word[j];
    word[j]=aux;
}
console.log(word);