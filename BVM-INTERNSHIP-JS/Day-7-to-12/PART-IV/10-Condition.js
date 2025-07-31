/*  
// ● The if Statement
// ● Using Shorthand Conditional Expressions
// ● Testing Multiple Conditions with if and else
// ● Using Multiple Conditions with switch
   
    (i) if , else 
    (ii) else if 
    (iii) Ternary 
    (iv)Switch

1) IF Statement
 let age = 18;
    if (age < 18) 
    {
      console.log("You Can not Vote !!");
    } 
    else if (age <= 18) 
    {
      console.log("You Can vote !! ");
    }

2) Ternary ? : Statement
let result = age >=18 ?'Yes' : 'No'
console.log(result);

3) Switch Statement
const option = 2;
switch(option){
  case 1 :
        console.log('Hindi');
        break;
  case 2 :
        console.log('English');
        break;
  case 3 :
        console.log('Gujarati');
        break;
  default :
        console.log('Invalid Option');
}
CALCULATOR USING SWITCH STATEMENT
let a= 20;
let b= 10;
let option = '%';

switch(option){
  case '+':console.log(a+b);
  break;
  case '-':console.log(a-b);
  break;
  case '/':console.log(a/b);
  break;
  case '*':console.log(a*b);
  break;
  case '%': console.log(a/b) * b;
  break;
  default:console.log('Invalid Option !!');  
}
*/
