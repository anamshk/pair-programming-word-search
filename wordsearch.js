const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  let bigArr = [];
  const rows = letters.length;
  const cols = letters[0].length;
  for (let j = 0; j < cols; j++) {
    let smallArr = [];
    for (let i = 0; i < rows; i++) {
      smallArr.push(letters[i][j]);
    }
    bigArr.push(smallArr);
  }
  
  const virtical = bigArr.map(ls => ls.join(''));
  for (const l of virtical) {
    if (l.includes(word)) return true;
    else return false;
  }
  
};

module.exports = wordSearch;