class TreeNode {
  constructor(val) {
    this.left = null
    this.right = null
  }
}

function solve(testInput) {
  const direction  = testInput[0]
  let map = {}

  for (let i = 1; i < testInput.length; i++) {
    const formated = testInput[i].split('=').map((input) => input.trim())
    const source = formated[0]
    const dist = formated[1].split(',')
    const node = new TreeNode()
    node.left = dist[0].substring(1, 4)
    node.right = dist[1].substring(1, 4)
    map[source] = node
  }

  let found = false
  let i = 0
  let currentNode = map['AAA'] 
  let totalSteps = 0
  while (!found) {
    let movingTo = null
    if (direction[i] == 'L') {
      movingTo = currentNode.left
    } else {
      movingTo = currentNode.right
    }

    if (movingTo == 'ZZZ') {
      found = true
    }
    currentNode = map[movingTo]
    totalSteps += 1
 
    i = (i + 1) % direction.length
  }

  console.log(totalSteps)

}


export default function start(input) {
  input = input.split('\n')
  input.pop() 
  solve(input)
}
