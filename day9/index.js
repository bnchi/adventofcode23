function solve(testInput) {
  let finalSum = 0
  for (let r = 0; r < testInput.length; r++) {
    const history = testInput[r].split(' ').map((value) => parseInt(value))
    let values = []
    values.push(history)

    let row = 0
    while (!allZeros(values[values.length - 1])) {
      const nextRow = []
      for (let i = 0; i < values[row].length - 1; i++) {
        nextRow.push(values[row][i + 1] - values[row][i])
      }
      values.push(nextRow)
      row += 1
    }


    let val = 0
    for (let r = values.length - 1; r > 0; r--) {
      val = values[r - 1][0] - val
    }

    finalSum += val
  }

  console.log(finalSum)

}

function allZeros(values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] != 0) {
      return false
    }
  }

  return true
}

export default function start(input) {
  input = input.split('\n')
  input.pop() 
  solve(input)
}
