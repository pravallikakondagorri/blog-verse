let x=10,y=3;

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)


let c=5;
c+=3;
console.log(c)
c-=2;
console.log(c)
c*=3;
console.log(c)
c/=5;
console.log(c)
c%=5;
console.log(c)


//comparison operators

let a=10,b="10";
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)

//logical operators
let age=20;
console.log(age>=20 &&age<=40)
console.log(age<20 || age>20)
console.log(!(age<18))

//string
let firstName=" pravallika"
let lastName="kondagorri"
let fullName=firstName+" " +lastName
console.log(fullName)
let correctName=`Hello ${firstName} ${lastName},welcome to dev astra`
console.log(correctName)

//ternary
let myAge=18;
if(myAge>=18)

{
    console.log("Eligible to vote" )

}
else{
    console.log(" not eligible")
}
let result=myAge>=18 ? " eligible to vote":"not eligible"
console.log(result)

//increment and decrement

let count=5;
console.log(count++)
console.log(count)
console.log(++count)


//typeof
console.log(typeof count)
console.log(typeof "pravali")
console.log(typeof 18)