const a1 = process.argv[2];
const a2 = process.argv[3];

if (a1 === undefined) {
  console.log('No argument');
} else if (a2 === undefined) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
