function generate(front, back) {
    let array = [];
    if (front <= back) {
      for (let x = front; x <= back; x++) {
        array.push(x);
      }
    } else {
      for (let x = start; x >= end; x--) {
        array.push(x);
      }
    }
    return array;
  }
  
  // Test the cases
  console.log(generate(4, 7)); // Output: [4, 5, 6, 7]
  console.log(generate(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]