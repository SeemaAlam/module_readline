// const { RSA_X931_PADDING } = require("constants")a

let arr = ["book1", "book2", "book3", "book4"];

var rl = require("readline"),
  rl = rl.createInterface(process.stdin, process.stdout);

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
      rl.question("Add a new book \n", (book) => {
        arr.push(book);
        rl.prompt();
      });
      break;

    case "3":
      rl.close();
      break;

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
