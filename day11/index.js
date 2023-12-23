function solve(testInput) {
  const rows = testInput.length 
  const cols = testInput[0].length 

  let emptyRows = []
  for (let i = 0; i < rows; i++) {
    const currentRow = testInput[i]

    let isEmpty = true
    for (let j = 0; j < cols && isEmpty; j++) {
      if (currentRow[j] == '#') {
        isEmpty = false
      }
    }
    
    if (isEmpty) {
      emptyRows.push(i)
    }
  }

  let emptyCols = []
  for (let i = 0; i < cols; i++) {
    let isEmpty = true
    for (let j = 0; j < rows && isEmpty; j++) {
      if (testInput[j][i] == '#') {
        isEmpty = false
      }
    }

    if (isEmpty) {
      emptyCols.push(i)
    }
  }

  let points = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (testInput[r][c] == '#') {
        points.push([r, c])
      }
    }
  }

  let sum = 0
  for (let i = 0; i < points.length; i++) {
    const [rightx, righty] = points[i]
    for (let j = i + 1; j < points.length; j++) {
      const [leftx, lefty] = points[j]
      const distance = Math.abs(rightx - leftx) + Math.abs(righty - lefty)

      let totalRowsBetweenGalaxies = 0
      // check how many rows are between each point 
      for (let r = Math.min(leftx, rightx); r < Math.max(leftx, rightx); r++) {
        if (emptyRows.includes(r)) {
          totalRowsBetweenGalaxies += 1
        }       
      }

      let totalColsBetweenGalaxies = 0
      for (let c = Math.min(lefty, righty); c < Math.max(lefty, righty); c++) {
        if (emptyCols.includes(c)) {
          totalColsBetweenGalaxies += 1
        }       
      }

      sum += distance + totalRowsBetweenGalaxies + totalColsBetweenGalaxies
    }
  }

  console.log(sum)
}

export default function start(input) {
  input = input.split('\n')
  input.pop()

  const map = []

  for (let i = 0; i < input.length; i++) {
    const row = input[i].split('')
    map.push(row)
  }

  solve(map)
}
