const numbers = {
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
}

function solve(testInput) {
  let sum = 0
  for (const word of testInput) {
    let subNumbers = []

    for (let i = 0; i < word.length; i++) {
      let subNumber = word[i]
      if (isNumber(subNumber)) {
        subNumbers.push(subNumber)
      }

      for (let j = i + 1; j < word.length; j++) {
        subNumber += word[j]

        if (subNumber in numbers) {
          subNumbers.push(numbers[subNumber])
        }
      }
    }

    sum += parseInt(subNumbers[0] + subNumbers[subNumbers.length - 1])
  }

  console.log(sum)
}

function isNumber(chars) {
  return !isNaN(parseInt(chars))
}

export default function start(input) {
  input = input.split('\n')
  input.pop() // last line is empty just pop it dosen't really matter that much
  solve(input)
}

