
// ### Part 1:

var theScrapHeap = ["AZI-3", "2-1B", "R2-D2", "Buzz Droid", "IG-88", 
"Battle Droid", "Probe Droid", "Droideka", "Huyang", "C-3PO"];

for(var i=0; i < theScrapHeap.length; i++){
	if(theScrapHeap[i].indexOf('C-3PO') !== -1){
		console.log("Put a restraing bolt on this one!" );
	} else if(theScrapHeap[i].indexOf('R2-D2') !== -1){
		console.log("Put a restraing bolt on this one!" );
	} else {
		console.log("This isn't the droid we're looking for.");
	}
}

// ### Part 2:

var theScrapHeap = ["AZI-3", "2-1B", "R2-D2", "Buzz Droid", "IG-88", 
"Battle Droid", "Probe Droid", "Droideka", "Huyang", "C-3PO"];

var isThisTheDroidWereLookingFor = function(droid){

    if(theScrapHeap[i].indexOf('C-3PO') !== -1 || theScrapHeap[i].indexOf('R2-D2') !== -1){
    	console.log('true');
	} else {
		console.log('false');
	}
}
	
for(var i=0; i < theScrapHeap.length; i++){
	isThisTheDroidWereLookingFor(i)
}

	

