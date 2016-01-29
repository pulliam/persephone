// This isn't the droid we're looking for.
// You've been asssigned the task of finding the droids ferrying the Death Star plans.
// Create a conditional statement that will search through theScrapHeap using a loop 
//and print out "Put a restraing bolt on this one!" if the droid is "C-3P0" or "R2-D2" 
//and "This isn't the droid we're looking for." if it isn't either of those.

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
