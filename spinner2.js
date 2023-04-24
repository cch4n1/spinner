// creates a spinner animation in console
// define spinner function
const spinner = function() {
  // declares animation variable with each character representing a frame of animation
  const animation = `|/-\\|/-\\|`;
  // delay variable sets timer for each frame
  let delay = 100;
  // loop through animation
  for (const frame of animation) {
    // call setTimeout
    setTimeout(() => {
      // stdout to print, \r to bring cursor back
      process.stdout.write(`\r${frame}   `);
      // timer set to delay variable
    }, delay);
    // increment delay by x amount
    delay += 200;
  }
  // starts a new line after animation has finished
  setTimeout(() => {
    // starts a new line
    console.log();
    // delay should have accumulated total delay time by now
  }, delay);
};
// calls spinner function
spinner();