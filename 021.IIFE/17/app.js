const isSquare = function (n) {
  if (Math.sqrt(n) >= 0 && Number.isInteger(Math.sqrt(n))) {
    return true;
  } else {
    return false;
  }
};

console.log(isSquare(3));


