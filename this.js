//'this' is magical

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

Lemontree.getObjectType(div);
return typeArray[1].slice(0, this.length-1); 

// this → object ：Lemontree
// this.length = 0 
// typeArray[1].slice(0, -1)  → ""

getType(div); //HTMLDivElement
return typeArray[1].slice(0, this.length-1); 

// this → typeArray[1];
// typeArray[1] = "HTMLDivElement]" 
// this.length = 11
// typeArray[1].slice(0, 10) → HTMLDivElement

//Solution

function getObjectType(a) {
	var typeArray = Object.prototype.toString.call(a).split(" ");
	return function(a){
		return a.slice(0, this.length-1);
	}(typeArray[1]);
};
window["Lemontree"]["getObjectType"] = getObjectType;
Lemontree.getObjectType(div); //HTMLDivElement






