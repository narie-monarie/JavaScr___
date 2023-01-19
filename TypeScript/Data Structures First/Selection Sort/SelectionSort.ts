export function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; i++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        console.log(arr)
        var temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
        console.log(arr)
    }
    return arr
}

console.log(selectionSort([19, 44, 38, 5, 47, 15]))
