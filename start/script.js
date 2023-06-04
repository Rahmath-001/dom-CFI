// alert("Yoo Buddy");

// console.log("This is using console.log");

// console.log(typeof(true))

// console.log(typeof(20))

// console.log(typeof("hello"))

// let myName="Rahmath"
// myName="Qaaemuddin"

// console.log(myName);


// let yourName= prompt("Enter Your Name: ")
// console.log(yourName);

// alert("Hello " + yourName + ", ypur name has a length of " + yourName.length)






// let x=7;

// x++;
// x--;

// x=x+4;
// x+=4;
// x*=4;

// x/=6


// console.log(x);



// function print (){
//     console.log("Buddy");
// }

// print()

// let x= 4;
// let y=6;

// let sum = x+y;
// console.log(sum);



// function sum(a,b){ // varialbles passed in function declaration are called parameters.
//     console.log(a+b);
// }

// sum(4,2) // varialbles passed while calling the function declaration are called arguments.
// sum(6,1)
// sum(16,9)




// function getChocalate(money) {
//     console.log(Math.floor(money/1.5));
//     return (money%1.5)
// }

// let change = getChocalate(10)
// console.log(change);





// function diceRoll() {
//     let random = Math.random()*6
//     return Math.floor(random + 1)
// }

// let output = diceRoll();
// console.log(output);

// if(output==6){
//     console.log("Congrats, bail milgayi");
// }
// else{
//     console.log("You didn't get out");
// }




// if(3>=3){
//     console.log("First is largest");
// }
// else{
//     console.log("Second is largest");
// }






// function largest(a,b,c){
//     if (a>b && a>c){
//         console.log(a + ` is the largest`);
//     }else if(b>c){
//         console.log(b + ` is the largest`);
//     }else{
//         console.log(c + ` is the largest`);
//     }
// }

// largest(3,2,0)





// let count=1;

// while(count <=100){
//     console.log(count);
//     count++;
// }


// for(let coun=1; coun<=100; coun++){
//     console.log(coun);
// }







// let guests= ["Adnan", "Omer", "Shabbir", "Ateeq", "Rahmath"]


// function check(){
//     let guestName= prompt("Enter your Name")

// for (let i=0; i<guests.length; i++){
//     if(guests[i] === guestName){
//         console.log("You are Welcomed");
//         return;
//     }1
// }
// console.log("Sorry, Your Name is not Registered");
// }

// check()





// document.querySelector("h1").innerHTML="Yooo"
// console.log(document);


// console.log(document.getElementsByTagName("p"));    //it is an array
// document.getElementsByTagName("p")[3].innerHTML= 'This is cahnged using ScriptJS'

// console.log(document.getElementById("hi"));

// console.log(document.querySelectorAll("p"));



let heading = document.querySelector("h1")
let button = document.querySelector("#btn")

button.addEventListener("click", () => {
    console.log("the function is working");
    heading.innerHTML = " Yooo it changed the heading."
    // heading.innerHTML += " Yooo its contiuo change"
})


