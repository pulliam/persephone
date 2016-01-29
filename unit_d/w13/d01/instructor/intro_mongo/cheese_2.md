## Nested Cheese

> It's important to know your cheeses'  to make good recommendations to your customers and fellow cheesemongers. Update your cheeses with information about their flavor notes.

- Add an array of flavor_notes to Maroilles that contains "sharp" and "bold"
- Add an array of flavor_notes to Pepper Jack that contains "buttery" and "mild"
- Add an array of flavor_notes to Teleme that contains "crumbly" and "creamy"
- Add an array of flavor_notes to Charolais that contains "sweet" and "creamy"
- Add an array of flavor_notes to Stichelton that contains "buttery" and "sharp"

> Let's look through this data.

- Find all cheeses with flavor notes
- Find all cheeses without flavor notes
- Find all cheeses with the flavor note "creamy"

> Now, let's make some updates. You can replace the entire array, or you can use MongoDB's [`$pull` and `$push` operators](https://docs.mongodb.org/v3.0/reference/operator/update/pull/).

- Add 'plasticky' to Pepper Jack's flavor_notes array.
- Add 'smooth' to Maroilles's flavor_notes array.
- Remove 'sweet' from Charolais's flavor_notes array.
- Replace 'plasticky' from Pepper Jack's flavor_notes array.

<!-- > It's important to know your cheeses' geneology to make good recommendations to your fellow cheesemongers. Update your cheeses with information about similar cheeses.

- Add an 'influences' array to Roquefort that contains a reference to Stilton and Epoisses. Include the name and ID of said cheese.
- Add an 'influences' array to Roquefort that contains a reference to Stilton and Epoisses. Include the name and ID of said cheese. -->