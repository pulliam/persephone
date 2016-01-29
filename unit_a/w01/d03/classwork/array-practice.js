var nirvana = ['kurt cobain', 'aaron burckhard', 'krist novoselic']

// Replace Aaron with Dale Crover
nirvana.splice(1, 1, 'Dale Crover');

// Replace Dale with Dave Foster
nirvana.splice(1, 1, 'Dave Foster');

// Replace Dave with Chad Channing
nirvana.splice(1, 1, 'Chad Channing');

// Add Jason Everman to the band
nirvana.push('Jason Everman');

// Remove Jason Everman
nirvana.pop();

// Replace Chad with Dan Peters
nirvana.splice(1, 1, 'Dan Peters');

// Replace Dan with Dave Grohl (finally!)
nirvana.splice(1, 1, 'Dave Grohl');

// Add John Duncan to the band
nirvana.push('John Duncan');

// Remove John
nirvana.pop();

// Add Lori Goldston to the band
nirvana.push('Lori Goldston');

// Add Pat Smear
nirvana.push('Pat Smear');

// Remove Kurt Cobain
nirvana.shift();
