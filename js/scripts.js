var liter = parseFloat(prompt("Enter volume in liters please"));

var gallon= function(liter) {
  return liter / 3.785;
}
 var result= gallon(liter);

 alert(liter + " liters equals " + result + " gallons.");
