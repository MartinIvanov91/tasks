let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

    console.log(countStr)
}


// console.log("Let's count people on the subway!")


// let myAge = 31,
//     dogAge = 7

//     asd = myAge * dogAge

//     console.log(asd);


// let bonusPoints = 50

// bonusPoints = bonusPoints + 50 

// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75

// console.log(bonusPoints)

// let points = 0

// function bot() {
//     points = points + 1
    
// }

// bot()
// bot()
// bot()

// console.log(points)

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

// increment()


// let myName = "Martin",
//     greetings = "hi my name is ",
//     myGreetings = greetings + " " + myName

//     console.log(myGreetings)