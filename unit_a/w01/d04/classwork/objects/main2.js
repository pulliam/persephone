//////////////////////////////////////////////////////////////////////////////////////////

// Turn the following information about Paul Simon into a JavaScript Object
// Paul Frederic Simon is an American musician, actor and singer-songwriter. 
// Simon's fame, influence, and commercial success began as part of the duo 
// Simon & Garfunkel, formed in 1964 with musical partner Art Garfunkel


var musician = {
	name: 'Paul Simon',
	occupations: [
	'musician',
	'actor',
	'singer-songwriter'
	]
}

musician.Born = 'October 13, 1941';
musician.BornIn = 'Newark, NJ';
musician.Heigth =  5.8;
musician['Music Group'] = 'Simon & Garfunkel';
console.log(musician);

var singer = {
	name: 'Art Garfunkel',
	occupations: 'singer'
}

var everyone = [musician, singer];

console.log(everyone);