var x = 10; //global

let y = 20; // init variable
const z=30;
k = 10; // var k = 10;
x = "hello world!";
console.log(x);
let f = y > 10;
let u = false;
if(u){
    console.log("y lon hon 10")
}else{
    console.log("y nho hon 10")
}
for(let i = 0 ; i<10 ; i++){
    console.log("Xin chao "+i);
}
x = "10";
y = 20;
x = parseInt(x);
console.log(x+y);
k = "13hello2"
k = parseInt(k);
console.log(k);
if(isNaN(k)){
    console.log("Khong phai so");
}else{
    console.log(k);
}
let ary = [1,2,3];
ary[3] = "hello";
ary[4] = [5,6,"xin chao"];
ary[4][3] = [3.13,1,"a"];

function sayHello() {
    console.log("Hello Everybody!");
}

function sum(a,b) {
    return a+b;
}
c = sum(1,6);
console.log(c);

let arr = [5,1,7,9,12,2];
arr[6] = [8,5.6,"a"]
arr[7] = "hello"
arr.push(77);
arr.map(function (e) {
    console.log(e);
});

function checkSNT(n) {
    if(n<2) return false;
    if(n<3) return true;
    for( let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0) return false;
    }
    return true;
}
let snt = [];
for(let i=0;i<100;i++){
    if(checkSNT(i))
        snt.push(i);
}
for(let i=0;i< snt.length; i++){
    console.log(snt[i]);
}
snt.map(function (e) {
    console.log(e);
});
snt.map(e=>{
    console.log(e);
})