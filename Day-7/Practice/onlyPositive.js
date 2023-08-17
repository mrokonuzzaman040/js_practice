function onlyPositive(arr) {
  return arr.filter(function (num) {
    return num > 0;
  });
}

console.log(onlyPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3]));