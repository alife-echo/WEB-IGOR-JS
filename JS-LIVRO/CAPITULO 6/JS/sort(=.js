function sort(numbers, pivot) {
  var queue = []
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < pivot) {
      queue.push(numbers[i])
    }
  }
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > pivot) {
      queue.push(numbers[i])
    }
  }
  return queue
}

console.log(sort([23, 45, 6, 7, 9, 12, -1], 45))
