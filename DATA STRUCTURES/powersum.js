function powerSum(array, power = 1) {
  let sum = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      sum += powerSum(element, power + 1);
    } else {
      sum += element;
    }
  }
  return Math.pow(sum, power);
}

let array = [1, 2, [3, 4], [[2]]];
console.log(powerSum(array));
