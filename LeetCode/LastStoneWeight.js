let stones = [3, 7, 2];

stones.sort();
stones.reverse();
let stone;
let d = 0;
let c = 1;

for (let i = 0; i < stones.length - 1; i++) {
  if (stones[d] > stones[c] || stones[d] === stones[c]) {
    stone = stones[d] - stones[c];
    stones.shift();
    stones.shift();
    stones.push(stone)
  } else if (stones[d] < stones[c]) {
    stone = stones[c] - stones[d];
  }
  console.log(stones)
  d += 2;
  c += 2;
}

var s = []

for (let i = 0; i < stones.length; i++) {
  if (stones[i] < 1) {
    break
  } else {
    s.push(stones[i]);
  }
}
console.log(s)
