function consecutiveSubstrings(string) {
  const results = []
  strArr = string.split('')

  strArr.forEach((char, i) => {
    results.push(char)
    let substring = char
    let j = i

    while (string[j + 1] &&
      string[j].charCodeAt() === string[j + 1].charCodeAt() - 1) {
      substring += string[j + 1]
      results.push(substring)
      j++
    }
  })

  return results
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
