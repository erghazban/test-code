//alert("hello guys");
/*console.log("I love you");
console.warn("be careful");
console.error("you have all error in your system:)");
document.getElementById('BYD').innerHTML="good bye world";
//document.write('final tour');*/

/*let fname = "Erfan"
fname = "mohammad";
console.log(fname);

const version=2.4
console.log(version)*/

/*
const age=22;
console.log(typeof age);
 
const firstName='Erfan'
console.log(typeof firstName);

const isDone=false;
console.log(typeof isDone);

let x=null;
console.log(typeof x);

let c=undefined;
console.log(typeof c);

x=age*4;
console.log(x);

let name="Erfan";
let lName="Ghazban";
//let fullName=' hello ' + name + ' ' + lName;
fullName=`Hello ${name} - ${lName}`
console.log(fullName);
console.log(fullName.length);
//دستور بالا میگوید که تعداد کاراکتر های ما در بالا چقدر است 
console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())
//دستورات بالا تمام حروف را بزرگ یا کوچک میکنند 
console.log(fullName.substring(0,5).toLowerCase())
//این دستور میگه که از فلان کارکتر تا فلان کارکتر را برای من بردارو دستور کوچک کردن تمام حروف هم با این ترکیب کردیم
console.log(fullName.split(" "));
//در دستور بالا گفته ایم که کارکتر های من را بر اساس اسپیس از هم جدا کن 




let cllasName=new Array('c++','java','html');
let cllasName2=['c++','java','html',true,100];
//به یکی از دو روش بالا میتوانیم که ارایه ها را تعریف کنیم 
//داخل آرایه میتواننیم چند مقادیر متفاوت کنار هم بگذاریم مثل استرینگ و بولین و دیگر 
console.log(cllasName);
//اگر وارد بخش کنسول شوید میبینید که عناصر آرایه را برای ما جدا کرده
//className2[1]='pyton';
console.log(cllasName2[1]);
//در این جا فقط ایندکس 1 این آرایه را به ما نشان میدهد 
cllasName2[3]='pyton';
//در این جا یکی از ایندکس ها را حذف و ایندکس بالا را جایگزین آن کردیم و و حتی میشود از این طریق یک انیندکس اضافه کرد 
console.log(cllasName2);

cllasName.push='react'
console.log(cllasName)
//در این جا هم یکی اضافه شد به انتها آرایه
cllasName.unshift('swift')
console.log(cllasName)
//در این جا میبینید که به اول جمبه اضافه شده 
cllasName.pop()
console.log(cllasName)
//این باعث میشه آخرین آرایه ما حذف بشه
console.log(cllasName.indexOf('html'))
//این آرایه باید نشان دهد که این چندمین ایندکس ما در آرایه هست (ن)
*/

//object
/*const student= {
    name : 'Erfan',
    lastName : 'Ghazban',
    id : 1382,
    courses : ['javascropt','html','css'],
    adress : { country : 'iran' , city : 'tehran' }
}
console.log(student);
console.log(student.name);
console.log(student.adress);
console.log(student.courses[1]);
console.log(student["name"]);
student.courses="javascript , html";
console.log(student);
student.email = "erfang399@gmaoil.com";
console.log(student);
//در این جا این موارد را به آبجکت های بالا اضافه کردیم 
*/



//function
function log(name+lName){
   console.log("hello "+ name +lName); 
}
log('Erfan' , 'Ghazban');
log('Mohammad' , 'Ghazban');

const log2 = () =>
{
    console.log("bye")
}
log2();