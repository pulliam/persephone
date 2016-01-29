var spiritName = {};

spiritName.adjectives = [
  'Pretty',
  'Ugly',
  'Hungry',
  'Angry',
  'Fancy',
  'Selfish',
  'Persuasive',
  'Smelly',
  'Stubborn',
  'Dimwitted'
];

spiritName.nouns = [
  'Boy',
  'Girl',
  'Person',
  'Control',
  'Paiting',
  'Sushi',
  'Soda',
  'Guitar',
  'Soldier',
  'Iphone'
];

spiritName.getName = function() {
    var randomIndex = Math.floor(Math.random() * this.adjectives.length);
    return this.adjectives[randomIndex] + ' ' + this.nouns[randomIndex];
 };

module.exports = spiritName;