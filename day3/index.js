function solve(testInput) {
  let rows = testInput.length
  let cols = testInput[0].length

  let gears = {}
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (testInput[i][j] == '*' && isNaN(testInput[i][j])) {
        gears[`${i}, ${j}`] = new Set()
        for (const rr of [-1, 0, 1]) {
          for (const cc of [-1, 0, 1]) {
            const row = i + rr
            const col = j + cc
            const isNumber = !isNaN(testInput[row][col])
            if (isNumber) {
              const [low, high] = findNumber(testInput, row, col)
              gears[`${i}, ${j}`].add(JSON.stringify([row, low, high]))
            }
          }
        }
      }
    }
  }

  let sum = 0
  for (const gear in gears) {
    if (gears[gear].size != 2) continue 

    let ratio = 1
    for (const partNumber of gears[gear]) {
      const [row, low, high] = JSON.parse(partNumber)

      let partNumberChain = ''
      for (let col = low; col <= high; col++) {
        partNumberChain += testInput[row][col]
      }

      ratio *= parseInt(partNumberChain)
    }

    sum += ratio
  }

  console.log(sum)
}


function findNumber(input, row, col) {
  let end = col
  while (!isNaN(input[row][end])) {
    end += 1
  } 

  let start = col
  while (!isNaN(input[row][start])) {
    start -= 1
  } 
  
  return [start + 1, end - 1]
}

export default function start(input) {
  input = input.split('\n')
  input.pop()

  let matrix = []
  for (const row of input) {
    matrix.push(row.split(''))
  }
  solve(matrix)
}
