function addNUm(l1, l2) {
  const array = [];

  for (let i = 0; i < l1.length; i++) {
    array.push(l1[i] + l2[i]);
  }
  return array;
}

const l1 = [1, 2, 3];
const l2 = [4, 5, 6];
const result = addNUm(l1, l2);
console.log(result);
