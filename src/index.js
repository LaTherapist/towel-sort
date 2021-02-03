module.exports = function towelSort (matrix) {
  let result = [];

  if (matrix) { 
    matrix.map( (arr, i) => (i % 2 === 0) ? result.push(...arr) : result.push(...arr.reverse()) );
  }

  return result;
}
