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

// interface User{ //interface는 객체타입으로만 가능
//     name:string,
//     age:number
// }

// interface SuperUser extends User{
//     email :string,
    
// }

type Sum = (a:number, b:number)=>number
type Age = number;

arr.push('123')

// function func1(a:number, b:number):number{
//     return a+b
// }

// let result:number = func1(1,2)

// function fucn3(a:number, b:number, c?:number){ //? 올수도 있고 아닐수도 있고 c:number || undefined 혹은 c:number=123 값을 미리넣음
//     console.log(a, b, c)
// }
// fucn3(1,2)

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

// const personObj2:User = {
//     name: 'kosnan',
//     age: 20
// }


//0109 add
const obj:{
    a: number, //readonly 읽기전용;;
    b?: string
} = {
    a: 123,
    b: '123'
}

obj.a = 52

// const arr2: readonly number[] = [1,2,3,4]

// arr2.push(6)

const tuple: readonly[string, number] = ['123', 123]

type Obj = {
    a: number,
    b: string
}

type Ko = string | number | boolean //union

const ab: Ko = true;

type Func = (a:number,b:number) => number

const func:(a:number,b:number) => number = (a,b) => {
    return a+b
}

const fucn2:Func = (a,b) =>{
    return a+b
}

interface Obj2 {
    a: number,
    b?: number | string
}
interface Obj3 extends Obj2 {
    c: string
}

const obj4: Obj3 ={
    a: 123,
    b: '1234',
    c: '123'
}

interface Fun2 {
    (a:number,b:number):number
}

// interface union X
const obj3:Obj2 = {
    a: 123
}

interface Animal {   //구조화
    makeSound():void
}

interface Mammal{
    letgs: number
}

class BullDog implements Animal, Mammal {
    makeSound(): void {
        console.log('bowbow')
    }
    letgs: number = 4;
}

// class Animal2 {
//     makeSound():void{
//         console.log()
//     }
// }

abstract class Animal2{  //class 추상화, 구조 + 기능
    makeSound():void {
        console.log()
    }
}

class Whale extends Animal2 implements Mammal {
    makeSound(): void {
        console.log('Woooow')
    }
    letgs: number = 0;
}

class Dog extends Animal2 {
    makeSound(): void {
        console.log()
    }
}

const dog = new Dog()
const bullDog = new BullDog()

dog.makeSound()
bullDog.makeSound()

let arrz: Object = [1,2,3,4,5]
let objz: Object = {
    a: 1,
    b: 2
}

let arrz2: number [] = [1,2,3,4,5]
let objz2: {
    a: number,
    b?: number
} = {
    a: 1,
    b: 2
}

type Objj = {
    readonly a: number,
    b: number
}

interface Objj2 {
    readonly a: number,
    b?:number
}

let ojz:Objj = {
    a:1,
    b:3
}

type Str = string

interface Objj3 extends Objj2{
    c:string
}

let ojz2:Objj3 ={
    a:1,
    c:'123'
}

class Parent{
    a: number;
    b: number;
    c: string;
}

abstract class Parent2{
    abstract a: number;
    abstract b: number;
    abstract c: string;
}

class Temp3 extends Parent2{
    a: number;
    b: number;
    c: string;

    constructor(a:number, b:number, c:string){
        super()
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

class Temp2 extends Parent{
    a: number;
    b: number;
    c: string;
}

class Temp implements Objj3{
    a: number;
    b: number;
    c: string;

    constructor(a:number, c:string){
        this.a = a;
        this.b = 123;
        this.c = c;
    }
}

let a: string | number

a= 'string';
a= 123

let b: string | number;

if(typeof b === 'string')
    b.toUpperCase()
else
    Math.abs(b)


// 함수의 타입 지정
type Funct = (a:number, b:number) => number
type Funct2 = {
    (a:number, b:number) : number
}
interface Funct3 {
    (a: number, b:number) : number
}

function funct(a: number, b:number){
    return a+b
}

const funct2:Funct = function (a,b){
    return a+b
}
// const funct2 = function (a:number,b:number){
//     return a+b
// }


//overloading
type Functi = (arr: number[]) => number

type Functi2 = {
    (arr:number[]):number;
    (arr:string[]):number;
}

type Functi3 = {
    (arr:number[]):number;
    (arr:string[]):number;
    (arr:Object[]):number;
}

const getSize:Functi = function(arr){
    return arr.length
}
const getSize2:Functi2 = function(arr){
    return arr.length
}
const getSize3:Functi3 = function(arr){
    return arr.length
}

getSize([1,2,3,4,5]) //5
getSize2(['1','2','3','4','5']) //5
getSize3([{a:1}, {b:2}, {c:3}])

function add(a:number, b:number): number;
function add(a:string, b:string): number;
function add(a:string, b:number): string;
function add(a:number, b:string): string;




function add(a:any,b:any){
    return a+b;
}
add('1',2) //12
add(2,'1') //21

//generics

function getSizee<T>(arr: T[]){
    return arr.length
}

getSizee([1,2,3,4,5])

interface MobilePhone<T, K> {
    name: string,
    year: string,
    company: string,
    options: T,
    information: K
}

fetch('http://naver.com')

type Options = {
    color: string
}
type information = {
    camera: number
}

const m1:MobilePhone<Options, information> = {
    name: 's24',
    year: '2024-01-01',
    company: 'samsung',
    options: {
        color : 'black'
    },
    information : {
        camera: 10000000
    }
}

//제약조건 추가
function getsizz<T extends string | number>(arr: T[]){
    return arr.length
}
getsizz<number>([1,2,3,4,5])
getsizz(['1','2','3'])


interface User {
    id: string,
    name? : string,
    age? : number,
}

//Partial을 사용하면 interface에 '?'를 사용하지 않아도 쓸수있다.
//개발 의도와 맞지 않기 때문에 잘쓰지않는게 좋다.
const createUser = (user: Partial<User>) => {
    console.log(user)
}

// const createUser2 = (user: Required<User>) => {
//     console.log(user)
// }

// const createUser3 = (user: Readonly<User>) => {
//     console.log(user)
// }
// const user: Readonly<User>={
//     id:'123',
//     name: 'asd'
// }

//name,age만 입력가능
const createUser4 = (user: Pick<User, "name" | "age">) => {
    console.log(user)
}
//id빼고는 다입력가능
const createUser5 = (user: Omit<User, "id">) => {
    console.log(user)
}


createUser({id: '123'})
// createUser2({id: '123'})
// createUser3({id: '123'})
createUser4({name: '123', age: 12})
createUser5({name: '123', age: 12})


// user.name='1234'

type returnTypeOfCreateUser = ReturnType<typeof createUser>

//
type GetArrayLength ={
    <T>(arr:T[]): number
}
const getArrayLength:GetArrayLength = (arr) =>{
    return arr.length
}

interface TempType {
    a: number,
    b: string,
}

getArrayLength<string>(['1','2','3','4'])
getArrayLength<number>([1,2,3,4,5])
getArrayLength([{a: 1}, {b:2}])
getArrayLength<TempType>([{a:123, b:'12'}])

interface TempType2<T>{
    a: T,
    b: string,
    c: T[]
}

const objc1:TempType2<string> = {
    a: '123',
    b: 'asd',
    c: ['123','asd']
}

const objc2: Partial<TempType2<number>> = {
    a: 123
}
const objc3: Required<TempType2<number>> = {
    a: 123,
    b: '123',
    c: [123]
}

const objc4: Readonly<Required<TempType2<number>>> = {
    a: 123,
    b: '123',
    c: [11]
}


interface TypeA {
    a:string,
    b: number
}

interface TypeB extends TypeA {
    c: boolean

}

const objc5: TypeB= {
    a: '123',
    b: 123,
    c: true
}

type TypeC = {
    a: string,
    b: number
}

type TypeD = {
    c: boolean
}

const objc6: TypeC & TypeD = {
    a: 'asd',
    b: 123,
    c: true
}

type Human = {
    think: () => void;
}
type Developer = {
    work: () => void;
}
const word: Human & Developer = {
    think()
        {console.log("divi")},
    work()
        {console.log("sss")}
}


//narowing
type ObjA = {
    a: number,
    fly: ()=>void
}

type ObjB = {
    a: number,
    work: ()=>void
}
////
class Dogs {
    bark(){
        console.log("bowwow")
    }
}
class Cats {
    meow(){
        console.log("meow")
    }
}
const cats = new Cats()
const dogs = new Dogs()

const makeSound = (odj: Cats | Dogs) => {
    if(obj instanceof Cats)
        obj.meow()
    else if(obj instanceof Dogs)
        obj.bark()
}
///

const fuc =  (objs: ObjA | ObjB) => {
    if("work" in objs)
        objs.work()
    else if("fly" in objs)
        objs.fly()
}

fuc({
    a: 123,
    fly: ()=> {
        console.log('fiying')
    }
})

let str1: string = '123'

if(typeof  str1=== 'string'){
    str1.charAt(0)
}

type Action = "stop" | "start" | "end"

function funcc1(action: Action){
    if(action === "stop"){
        action
        console.log("stopping")
    }
    else if(action === "start"){
        action
        console.log("starting")
    }
    else if(action === "end"){
        action
        console.log("ending")
    }
}
funcc1("stop")

//A || B //"A" is falsy  0, "", false, undefined, null Nan return "B"

//A ?? B //"A" is falsy undefined, null return "B" / 0, "", Nan return "A"

type ArrStr = {
    [key: string]: number | string;
    [index: number]: string;

}

const col1:ArrStr = {};
col1['asd'];
col1['asd'] = 123;
col1[3] = '123'

//Type Guard
type CustomType = {
    id: number,
    name: string,
}

function isCustomType(obj: any): obj is CustomType {
    return (
        typeof obj === "object" && 
        obj !== null &&
        typeof obj.id === "number" &&
        typeof obj.name === "string"
    )
}