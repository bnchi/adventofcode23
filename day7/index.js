function solve(testInput) {
  let charRank = {
    'A': 14,
    'K': 13,
    'Q': 12,
    'T': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2,
    'J': 0,
  }

  let rankArr = []

  for (const value of testInput) {
    let [card, bid] = value.split(' ')

    const [newArr, freq, totalJokers] = buildFrequency(card)
    const size = newArr.length

    bid = parseInt(bid)
    let kindType = -1
    if (isHighCard(size)) {
      kindType = 0
    } else if (isOnePair(size)) {
      kindType = 1
    } else if (isTwoPair(newArr, freq)) {
      kindType = 2
    } else if (isThreeOfKind(newArr, freq)) {
      kindType = 3
    } else if (isFullHouse(newArr, freq)) {
      kindType = 4
    } else if (isFourOfAKind(newArr, freq)) {
      kindType = 5
    } else if (isFiveOfKind(size)) {
      kindType = 6
    } 

    rankArr.push([kindType, card, bid])
  }

  rankArr.sort((a, b) => {
    if (a[0] == b[0]) {
      for (let j = 0; j < 5; j++) {
        if (a[1][j] != b[1][j]) {
          return charRank[a[1][j]] - charRank[b[1][j]]
        }
      }
    } 

    return a[0] - b[0]
  })

  let ans = 0

  for (let i = 0; i < rankArr.length; i++) {
    ans += rankArr[i][2] * (i + 1) 
  }

  console.log(ans)
}

function isHighCard(size) {
  return size == 5
}

function isOnePair(size) {
  return size == 4
}

function isTwoPair(input, frequency) {
  return frequency[input[0]] == 2 && frequency[input[1]] == 2 && frequency[input[2]] == 1
}

function isThreeOfKind(input, frequency) {
  return frequency[input[0]] == 3 && frequency[input[1]] == 1 && frequency[input[2]] == 1
}

function isFourOfAKind(input, frequency) {
  return frequency[input[0]] == 4 && frequency[input[1]] == 1
}

function isFullHouse(input, frequency) {
  return frequency[input[0]] == 3 && frequency[input[1]] == 2
}

function isFiveOfKind(size) {
  return size == 1
}

function buildFrequency(card) {
  let frequency = {}
  for (let i = 0; i < 5; i++) {
    if (card[i] in frequency) {
      frequency[card[i]] += 1
    } else {
      frequency[card[i]] = 1
    }
  }

  let newArr = []
  for (let value in frequency) {
    newArr.push(value)
  }

  newArr.sort((a, b) => frequency[b] - frequency[a])

  return [newArr, frequency]
}

export default function start(input) {
  input = input.split('\n')
  input.pop() 
  solve(input)
}
