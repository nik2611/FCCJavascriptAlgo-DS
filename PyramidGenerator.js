const character = "#";
const count = 8;
const rows = [];
console.log(rows);

for (let i = 0; i < count; i = i + 1){
    rows.push(character.repeat(i + 1));
}

function padRow(name) {
    const test = "Testing";
    console.log("This works!");
    return test;
    console.log("This works!");
}
const call = padRow("Nikhil");
console.log(call);

let result = "";
console.log(result);

for (const row of rows) {
  result = result + row + "\n";
}