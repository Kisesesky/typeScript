// let tem:string = '123';

// let temp = undefined
// if(temp.b)

// console.log(temp.b)

let str:string;

str = '1234';

let arr:string[] = [];
type Peson = {
    name: string,
    age: number
}
let is:boolean = true

interface User{ //interface는 객체타입으로만 가능
    name:string,
    age:number
}

interface SuperUser extends User{
    email :string,
    
}

type Sum = (a:number, b:number)=>number
type Age = number;

arr.push('123')

function func1(a:number, b:number):number{
    return a+b
}

let result:number = func1(1,2)

function fucn3(a:number, b:number, c?:number){ //? 올수도 있고 아닐수도 있고 c:number || undefined 혹은 c:number=123 값을 미리넣음
    console.log(a, b, c)
}
fucn3(1,2)

function func4(a:number, ...rest:number[]){
    console.log(rest)
}
func4(1,2,3,4,5,6)

const sum: Sum = (a, b) =>{
    return a+b
}

const personObj:Peson = {
    name: 'konan',
    age: 20
}

const personObj2:User = {
    name: 'kosnan',
    age: 20
}