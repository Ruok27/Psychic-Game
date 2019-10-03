document.getElementById("win-count").innerHTML = "43";
document.getElementById("lose-count").innerHTML = "88";
document.getElementById("guess-left").innerHTML = "4";
document.getElementById("guess-count").innerHTML = "1111113";

let letters = [];
//This literally took 10 minutes for me to figure out cause i wanted a quicker way to set up an alphabet array instead of typing it all in

for (let i = 97; i < 123;i++){
    
    letters.push(String.fromCharCode(i));

}

let cpuChoice = letters[Math.floor(Math.random() * (25 - 0 + 1)) + 0];













