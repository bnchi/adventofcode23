function solve(testInput) {
  let points = {}
  let totalNumberOfCards = 0

  for (let game of testInput) {
    totalNumberOfCards += 1
    game = game.split(":")
    let [left, right] = game[1].split("|")
    let winningCards = new Set()
    let myCards = new Set()
    for (let cardNumber of left.split(" ")) {
      if (cardNumber == '') continue
      winningCards.add(parseInt(cardNumber))
    }

    for (const cardNumber of right.split(" ")) {
      if (cardNumber == '') continue
      myCards.add(parseInt(cardNumber))
    }

   
    for (const card of myCards) {
      if (winningCards.has(card)) {
        if (totalNumberOfCards in points) {
          points[totalNumberOfCards] += 1
        } else {
          points[totalNumberOfCards] = 1
        } 
      }
    }
  }

  let copiesCounter = {}

  for (let i = 1; i <= totalNumberOfCards; i++) {
    copiesCounter[i] = 1
  }

  for (let i = 1; i <= totalNumberOfCards; i++) {
    if (i in points) {
      let copies = makeCopies(i, points[i], totalNumberOfCards)

      while (copies.length) {
        let number = copies.pop()
        copiesCounter[number] += 1
        let newCopy = makeCopies(number, points[number], totalNumberOfCards)

        if (newCopy.length) {
          copies.push(...newCopy)
        }
      }
    }
  }

  let sum = 0
  for (let num in copiesCounter)  {
    sum += copiesCounter[num]
  }

  console.log(sum)
}

function makeCopies(number, copies, totalNumberOfCards) {
  let numbers = []
  for (let i = 1; i <= copies; i++) {
    if (number + i <= totalNumberOfCards) {
      numbers.push(number + i)
    }
  }

  return numbers
}

export default function start(input) {
  input = input.split('\n')
  input.pop() 
  solve(input)
}
