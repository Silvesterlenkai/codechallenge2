function swap(string) {
    // Convert string to array of characters
    let swappedString = "";
    for (let x = 0; x < string.length; x++) {
      let val = string[x]
      if (val[x] === string[x].toUpperCase()) {
        swappedString += val.toLowerCase();
      } else {
        swappedString += val.toUpperCase();

      }
    }
  
    // Convert array of characters back to string
    return swappedString;
  }
  
  // Test the function
  let input = 'The Quick Brown Fox';
  let output = swap(input);
  console.log(output); // Output: 'tHE qUICK bROWN fOX'