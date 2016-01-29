
// ## Part 1
//   2. Create a variable called guestOfHonor and assign it's value to the name of the paleontologist at Snakewater, Montana.
//   1. Access the value of the specimen found in Snakewater, Montana, and store it in a variable called cleverGirl.

var site1 = {
  paleontologist: 'Dr. Alan Grant',
  depthInMeters: 10,
  location: 'Snakewater, Montana',
  specimens: ['Velociraptor']
}

var guestOfHonor = site1.paleontologist;
var cleverGirl = site1.specimens[0];

console.log(guestOfHonor);
console.log(cleverGirl);

// ## Part 2
//   1. Store the array of specimens of this site into a variable called `nicaraguanSpecimens`.
//   2. Make a variable called `favoriteSpecimen` and assign its value to your favorite dinosaur within `nicaraguanSpecimens` 
//( can you do this by referencing the Nicaragua object itself? )
//   3. Add 250000 to the annual budget of this site.

var site2 = {
    location: 'Nicaragua',
    depthInMeters: 200,
    annualBudget: 1500000,
    specimens: [
      'Tyrannosaurus Rex',
      'Stegosaurous',
      'Triceratops',
      'Velociraptor'
    ]
  }

var nicaraguanSpecimens = site2.specimens;
var favoriteSpecimen = nicaraguanSpecimens[2];
var favoriteSpecimen2 = site2.specimens[2];
site2.annualBudget = site2.annualBudget + 250000;


console.log(nicaraguanSpecimens);
console.log(favoriteSpecimen);
console.log(favoriteSpecimen2);
console.log(site2);


// ## Part 3

var hammondsMines = [
  {location: 'Buenos Aires', depthInMeters: 400, annualBudget: 1000000, specimens: ['Dilophosaurus','Brachiosaurus']},
  {location: 'Mexico', depthInMeters: 350, annualBudget: 900000, specimens: ['Gallimimus','Parasaurolophus']}
 ];

//   1. Access the depthInMeters of John Hammond's mine second mine.
hammondsMines[1].depthInMeters;

//   1. Store the dethInMeters of the Mexican mine into an appropriately named variable.
var MexicoDepth = hammondsMines[1].depthInMeters;
console.log(MexicoDepth);

//   1. Access and the annual budget for Hammond's mine in Buenos Airies.
hammondsMines[0].annualBudget;

//   1. Store the annual budget for Hammond's mine in Buenos Aires.
var BuenosAiresBudget = hammondsMines[0].annualBudget;
console.log(BuenosAiresBudget);

//   1. Access the dinosaur DNA specimens found in Buenos Aires.
hammondsMines[0].specimens;

//   1. Insert Nicaragua into hammondsMines
hammondsMines.push(site2);
console.log(hammondsMines);

//   1. Create three variables to store the annual budgets for each mine into them.
var BuenosAiresBudget = hammondsMines[0].annualBudget;
var MexicoBudget = hammondsMines[1].annualBudget;
var NicaraguaBudget = hammondsMines[2].annualBudget;

//   1. Access the 'Parasaurolophus' specimen.
hammondsMines[1].specimens[1];

//   1. Create a new reasonably named variable to track the total annual cost of 
var totalCost = BuenosAiresBudget + MexicoBudget + NicaraguaBudget;
console.log(totalCost);

//   1. Use a for loop to iterate through hammondsMines and calculate the total annual budget.

totalBudget = 0;
        for (i=0; i < hammondsMines.length; i++) {
            totalBudget += hammondsMines[i].annualBudget;
        }


//   1. Use a for loop to iterate through hammondsMines and calculate the average depth.

totalDepth = 0;
        for (i=0; i < hammondsMines.length; i++) {
            totalDepth = totalDepth + hammondsMines[i].depthInMeters;

        }

averageDepth = Math.round(totalDepth / hammondsMines.length);

