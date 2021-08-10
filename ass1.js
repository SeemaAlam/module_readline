

let arr = ["book1", "book2", "book3", "book4"];

var readline = require("readline"),
  rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt(
  "Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit \n"
);
rl.prompt();

rl.on("line", function (line) {
  switch (line.trim()) {
    case "1":
      console.log(arr);
      break;

    case "2":
      arr.push(line);
      break;

    case "3":
      r1.close();

    default:
      console.log(
        "You have selected an invalid entry so please press 1, 2 or 3`" +
          line.trim() +
          "`"
      );
      break;
  }
  rl.prompt();
}).on("close", function () {
  console.log("Have a great day!");
  process.exit(0);
});
