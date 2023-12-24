function solve(testInput) {
  let total = 0
  for (let i = 0; i < testInput.length; i++) {
    const spring = testInput[i].split(' ')
    const brokenSprings = spring[1].split(',').map(val => parseInt(val))
    const str = spring[0]
    total += recurse(0, str, brokenSprings) 
  }

  console.log(total)
}

function recurse(i, str, brokenSprings) {
  if (i == str.length) {
    return isValid(str, brokenSprings) ? 1 : 0
  }

  if (str[i] == '?') {
    const broken = str.substring(0, i) + '#' + str.substring(i + 1)
    const  working = str.substring(0, i) + '.' + str.substring(i + 1)
    return recurse(i + 1, broken, brokenSprings) + recurse(i + 1, working, brokenSprings)
  } else {
    return recurse(i + 1, str, brokenSprings)
  }
}

function isValid(str, brokenList) {
  let r = 0
  const ans = []
  while (r < str.length) {
    let l = r
    let totalPound = 0
    while (l < str.length && isPound(str[l])) {
      totalPound += 1
      l += 1
    }

    if (totalPound > 0) {
      ans.push(totalPound)
    }

    r = l + 1 
  }

  if (ans.length != brokenList.length) {
    return false
  }

  for (let i = 0; i < ans.length; i++) {
    if (ans[i] != brokenList[i]) {
      return false
    }
  }

  return true
}

function isPound(s) {
  return s == '#'
}

export default function start(input) {
  input = input.split('\n')
  input.pop() 
  // isValid(".###.##....#", [3, 2, 1])
 solve(input)
}
