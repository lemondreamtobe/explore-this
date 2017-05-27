//this is magical

//getObjectType in my Lemontree.js
function getObjectType(a) {
	var typeArray = Object.prototype.toString.call(a).split(" ");
	return typeArray[1].slice(0, this.length-1);
};
window["Lemontree"]["getObjectType"] = getObjectType;

//index.html import Lemontree.js and set getType
function getType(a) {
	var typeArray = Object.prototype.toString.call(a).split(" ");
	return typeArray[1].slice(0, this.length-1);
};

var div = document.getElementById("os"); //a div element

//now test two function
Lemontree.getObjectType(div); //""
getType(div); //HTMLDivElement

