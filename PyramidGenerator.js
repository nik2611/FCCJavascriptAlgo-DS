const character = "#";
const count = 8;
const rows = [];
console.log(rows);

for (let i = 0; i < count; i = i + 1){
    rows.push(padRow(i + 1, count));
}

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
padRow();
console.log(rows);
let result = "";
console.log(result);

for (const row of rows) {
  result = result + row + "\n";
}