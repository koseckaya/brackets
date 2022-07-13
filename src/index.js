module.exports = function check(str, bracketsConfig) {
  let memo = []
  let bracketsObj = bracketsConfig.reduce((acc, item) => {
    acc[item[0]] = item[1]
    return acc
  }, {})

  for (let i = 0; i < str.length; i++) {
    let topEl = memo[memo.length - 1]
    let current = str[i]
    if (bracketsObj[topEl] === current) {
      memo.pop()
      continue;
    }
    if (bracketsObj[current]) {
      memo.push(current)
      continue
    }
    if (memo.length === 0) {
      return false
    }
  }

  return memo.length === 0
}
