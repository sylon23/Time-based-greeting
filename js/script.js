var today = new Date();
console.log(today);
var currentHour = today.getHours();
console.log(currentHour);
var greeting;

if (currentHour >= 16) {
    document.getElementById("demo").innerHTML = "Good evening!";
} else if(currentHour >= 12){
        document.getElementById("demo").innerHTML = "Good afternoon!";

} else if(currentHour > 0){
    document.getElementById("demo").innerHTML = "Good morning!";
} else{
    document.getElementById("demo").innerHTML = "You are not on earth";
}

console.log(greeting);