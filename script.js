function compare(word1, word2) {
  const letters = {};
  for (let letter of word1) {
    letters[letter] = (letters[letter] || 0) + 1;
  }
  for (let letter in letters) {
    const amount2 = word2.split(letter).length - 1;
    if (amount2 !== letters[letter]) {
      return false;
    }
  }

  return true;
}
console.log(compare("Mother", "Mother")); 

