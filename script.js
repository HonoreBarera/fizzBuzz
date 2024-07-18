// By HnrBrr

//////////////////////computer choice//////////////////////////////////
function getComputerChoice() {
    let randomPick = Math.floor(Math.random() * 3)  // exclud 3. and round it up
    // either 0, 1 or 2
    return randomPick
}
let choice = getComputerChoice()
// console.log(choice) to make sure if it's working
let computerChoice

if (choice === 0) {
    computerChoice = 'rock'
} 
else if (choice === 1) {
    computerChoice = 'paper'
}
else if (choice === 2) {
    computerChoice = 'scissors'
}
// now print the value of computerChoise based on the above conditions (if, else ifs)
console.log(computerChoice)
//////////////////////end of computer choice///////////////////////////

// MORE PSEUDO CODE / DEVIDE TO CONQUER THE PROBLEM

// okay make sure to always transform html elements in js variables like so
let form = document.getElementById('form')

//eventListener aka callback function ('action', function(event){//human VS computer }) 
form.addEventListener('submit', function(event){

    event.preventDefault() // prevent empty submission

    // get input from within an event listener
    let input = document.getElementById('input').value //.value makes sure to get specifically the inputted value
    let output = document.getElementById('output')
    
    let humanChoice = input // so basically I need to throw it in humanChoice
    

    if ((computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper") || (computerChoice === "rock" && humanChoice === "scissors")) {
        output.innerHTML = `You Lost! ${computerChoice} beats ${humanChoice}`
    }
    else if(( humanChoice === "paper" && computerChoice === "rock") || ( humanChoice === "scissors" && computerChoice === "paper")  || ( humanChoice === "rock" && computerChoice === "scissors")){
        output.innerHTML = `You win! ${humanChoice} beats ${computerChoice}`
    }
    else if((humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "scissors")) {
        output.innerHTML = `It's a tie ${humanChoice} don't beat ${computerChoice}`
    }
})