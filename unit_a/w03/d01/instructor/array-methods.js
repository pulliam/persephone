Array.prototype.first = function(){
    return this[0];
}

Array.prototype.last = function(){
    return this[this.length - 1];
}

Array.prototype.isEmpty = function(){
    return !this.length;
}

Array.prototype.uniq = function(){
    var deDuped = [];
    for (var i = 0; i < this.length; i++) {
        if (deDuped.indexOf( this[i] ) === -1) {
            deDuped.push( this[i] );
        }
    }
    return deDuped;
}


