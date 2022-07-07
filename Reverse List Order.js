function reverseList(list) {
  let reversed = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversed.push(list[i]);
  }
  console.log(reversed);
  return reversed;
}

reverseList([1, 2, 3, 4]);
reverseList([9, 2, 0, 7]);
