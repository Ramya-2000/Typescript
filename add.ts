function add(n1:number,n2:number){
    if(typeof n1!=='number' || typeof n2!=='number'){
        throw new Error('Incorrect input!');
}
    return n1+n2;
}
const number1=3;
const number2=7.3;

const result=add(number1,number2);
console.log(result);
