export const insertionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1
    while (j >= 0 && arr[j + 1] < arr[j]) {
      let tmp = arr[j + 1]
      arr[j + 1] = arr[j]
      arr[j] = tmp
      j--
    }
  }
  return arr
}


console.log(insertionSort([2, 1, 9, 76, 4]))


