const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num1 = 10;
let num2 = 30;

r1.question(`what is ${num1}+${num2}? \n`, (userInput) => {
  if (userInput.trim() == 40) 
  r1.close();
  else {
    r1.setPrompt("Incorrect"); //accept the promt
    r1.prompt(); //call the prompt
    r1.on("line",(userInput)=>{
        if(userInput.trim()==40)
        r1.close();
        else{
            r1.setPrompt(`try again \n`);
            r1.prompt();
        }
    })
  }
});

r1.on("close", () => {
  console.log("correct");
});
