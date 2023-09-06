import randomColor from 'randomcolor';

function genColor() {
  //luminosity: 'light', (hue = 'blue');
  return randomColor();
}
console.log(genColor());

//trying hex color code in the box & then putting color
let totalColumn = 31;
let totalRow = 9;
let string = '';

for (let row = 1; row <= totalRow; row++) {
  for (let column = 1; column <= totalColumn; column++) {
    if (row === 4 || row === 6) {
      if (column === 1 || column === 22) {
        string += '#####';
      }
      string += ' ';
    } else if (row === 5) {
      if (column === 7) {
        string += genColor();
      } else if (column === 1 || column === 15) {
        string += '#####';
      }
      string += ' ';
    } else if (true) {
      string += '#';
    }
  }
  string += '\n';
}
console.log(string);
