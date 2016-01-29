var leetify = {};

leetify.translate = function (string) {
	var astring = string.replace(/a/gi,"@");
	var estring = astring.replace(/e/gi,"3");
	var gstring = estring.replace(/g/gi,"9");
	var lstring = gstring.replace(/l/gi,"1");
	var ostring = lstring.replace(/o/gi,"0");
	var sstring = ostring.replace(/s/gi,"5");
	var tstring = sstring.replace(/t/gi,"7");
	var zstring = tstring.replace(/z/gi,"2");
	console.log(zstring);
};

module.exports = leetify;