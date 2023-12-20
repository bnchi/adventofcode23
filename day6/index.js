function solve(testInput) {
  const time = testInput[0].split(' ').map(millisec => parseInt(millisec))
  const distance = testInput[1].split(' ').map(millimeter => parseInt(millimeter))

  let ans = 1
  for (let i = 0; i < distance.length; i++) {
    let ways = 0
    let currentTime = 1
    while (currentTime < time[i]) {
      if ((time[i] - currentTime) * currentTime > distance[i]) {
        ways += 1
      }

      currentTime += 1
    }

    ans *= ways
  }

  console.log(ans)
}

export default function start(input) {
  input = input.split('\n')
  input.pop() 
  solve(input)
}
