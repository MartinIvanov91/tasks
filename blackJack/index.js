//IF 

// let firstCard = 6
// let secondCard = 9
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let message = ""

// if (sum <= 20) {
//     message = "new card ?"
// } else if (sum === 21) {
//     message = "top"
//     hasBlackJack = true
// } else {
//     message = "Game over"
// }

//LOOP

// let sentence = ["Hello", "my", "name", "is", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }

//............
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
let player = {  //objects
    name: "Me",
    chips: 100
}
let cards = []  //arrey
let sum = 0
let hasBlackJack = false //booleans
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13 ) + 1

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}

console.log(getRandomCard())

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards =[firstCard, secondCard]
    sum = firstCard + secondCard
    

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "new card?"
    } else if (sum === 21) {
        message = " Blackjack!"
        hasBlackJack = true
    } else {
        message = "game over!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card) //push to arrey
        console.log(cards)
        renderGame()
    }
}

// RETURN


// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()

// console.log(totalTime)
// let fastestRace = getFastestRaceTime()

// console.log(fastestRace)


//Random Math
// function rollDice() {
//     let randomNumber = Math.floor( Math.random() * 6) + 1
//     return randomNumber
// }

// console.log(rollDice())


//object

// let castle = {
//     title:"Castle",
//     price: 190,
//     isSuperHost: true,
//     images: ["img1", "img2"]
// }

// console.log(castle.title) 



// let age = 15

// if(age < 6) {
//     console.log("free")
// } else if (age < 18 ) {
//     console.log("child disco")
// } else {
//     console.log("full price")
// }

// let largeCountries = ["China","asd","asd2","asd3"]

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }

// largeCountries.pop() //remove asd3
// largeCountries.push("Pakistan") 
// largeCountries.shift() //remove china
// largeCountries.unshift("BG")
// console.log(largeCountries)

// let dayOfMonth = 31
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday" ) {
//     console.log("asd")
// }

// let hands = ["rock", "paper", "nojica"]

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3 )
//     return hands[randomIndex]
// }

// console.log(getHand())


