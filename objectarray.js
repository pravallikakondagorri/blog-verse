let person ={
    name:"pravalika",
    age: 19,
    college:"jntugv"
}
console.log(person.name)
console.log(person["age"])
console.log(person.college)

const{name,age}=person; //destructuring assignment
console.log(name)
console.log(age)

let fruits=["apple","mango"]
console.log(fruits[0])

let numbers=[1,2,3,4,5]
console.log(numbers[3])

let squares=numbers.map((num)=>num*num);//transform each element
console.log(squares)

let evens=numbers.filter((num)=>num%2==0)//filter values
console.log(evens)

let sum=numbers.reduce((present,num)=>present+num,0)// reduce values
console.log(sum)

arr=[{
    name:"pravalli",
    marks:89

 },{
    name:"sahithya",
    marks:90
 },{
    name:"bindu",
    marks:92
 }]
 for(i=0;i<3;i++)
 {
 console.log(arr[i])
 }
/*if (marks1>marks2 && marks1>marks2)
{
   let  object=arr[1]
}
else if (marks2>marks1 && marks2>marks3){
    let object=arr[2]
}
else{
   let  object=arr[3]
}
console.log(object)*/
let maxMarks=0
let topper=""
for(let person of arr)
{
    if(person.marks>maxMarks)
    {
        maxMarks=person.marks;
        topper=person.name
    }
}
console.log(`topper is ${topper} and she got ${maxMarks}`)