//challenge 1: your age in days
function ageIndays(){
    let birthYear = prompt("what year were you born?");
    let ageIndays= (2021 - birthYear)*365
    let h1 = document.createElement("h1")
    var textAnswer =document.createTextNode("You are " + ageIndays + " days old")
    h1.setAttribute("id", "ageIndays")
    h1.appendChild(textAnswer)
    document.getElementById("flex-box-result").appendChild(h1)



    

}
function reset(){
    document.getElementById("ageIndays").remove();


}


// challenge 2: cat challenge
function generateCat(){
    let image = document.createElement("img");
    let div = document.getElementById("flex-catgen")
    image.src = "https://thecatapi.com/api/images/get?format=src&type=git&size=small";
    div.appendChild(image)
}

// Chellenge3: game rock paper scissors






