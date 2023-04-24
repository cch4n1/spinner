// creates a spinner animation in console

setTimeout(() => {
  // the special character \r returns the cursor back to the beginning of the line
  // after \r, anything written will overwrite the line
  process.stdout.write('\r|   ');
  // using \r and setTimeout, it fakes an animation by rewriting
  // charactersin the same spoint after delay
}, 100);

setTimeout(() => {
  // spaces added after the character so cursor moves far 
  // enough away from animation
  // removing space padding will cause cursor to sit on top of animation
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);
