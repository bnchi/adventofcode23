function solve(testInput) {
  let totalSum = 0
  for (const game of testInput) {
    let gameInput = game.split(':')[1]

    let maxBlue = -1
    let maxRed = -1
    let maxGreen = -1

    for (let subset of gameInput.split(';'))  {
      for (let cubes of subset.split(',')) {
        cubes = cubes.trim()
        const [number, color] = cubes.split(' ')
        if (color == 'blue') {
          maxBlue = Math.max(maxBlue, number)
        } else if (color == 'red') {
          maxRed = Math.max(maxRed, number)
        } else if (color == 'green') {
          maxGreen = Math.max(maxGreen, number)
        }
      }
    }

    totalSum += maxBlue * maxRed * maxGreen
  }

  console.log(totalSum)
}

export default function start(input) {
  input = input.split('\n')
  input.pop() 
  solve(input)
}
