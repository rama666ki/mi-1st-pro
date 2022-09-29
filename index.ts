//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//###########################
let age: number;
age = parseInt(prompt('entre ur age here plz'));
if (age == 1 || age == 2) {
  console.log('new born');
} else if (age >= 3 && age <= 14) {
  console.log('baby');
} else if (age >= 15 && age <= 21) {
  console.log('teen');
} else if (age >= 22) {
  console.log('man or woman');
}
