function solve(testInput) {
  let sum = 0
  for (let game of testInput) {
    game = game.split(":")[1]  
    let [left, right] = game.split("|")
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

    let points = 0
    for (const card of myCards) {
      if (winningCards.has(card)) {
        if (points >= 1) {
          points *= 2
        } else {
          points += 1
        }
      }
    }

    sum += points
  }

  console.log(sum)
}

export default function start(input) {
  input = input.split('\n')
  input.pop() 
  solve(input)
}
