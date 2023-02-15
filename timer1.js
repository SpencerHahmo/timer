const args = process.argv;
timer = 1000;
// output = userInput.slice(' ');
function ascendingNumbers(a, b) {
  return a - b;
}
let userInput = args.slice(2).slice(' ').sort(ascendingNumbers);


const beepOutputer = (userInput) => {
  userInput = userInput.filter(function(x){
    return x > -1;
  });
  //console.log(userInput);
  if (userInput.length === 0) return;

  for (let i = 0; i < userInput.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(`BEEP at ${userInput[i]} seconds.`);
      endTime = timer * userInput[i];
    }, timer * userInput[i]);
    if (i === userInput.length - 1) {
      setTimeout(() => {
        process.stdout.write("\n");
      }, timer * userInput[i]);
    }
  }
};

beepOutputer(userInput);