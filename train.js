// i'm a bit behind but this is where i'm at with this exercise - i'll catch up today



const yourAge= number(prompt(`Please enter your age`));
const distanceTraveling = number(prompt(`how far are you travelling in km today`));
const pricePerKm = 0.21;

let pricePerTravelled = distanceTraveling * pricePerKm;
let under18Price = pricePerTravelled - (pricePerTravelled * 0.2);
let over65Price = pricePerTravelled - (pricePerTravelled * 0.4);
if (yourAge <= 18) alert(`The price of your ticket is ${under18Price}`);
if (yourAge >= 65) alert(`The price of your ticket is ${over65Price}`);

// this isn't working but i'll figure it out:

if (yourAge > 18 && < 65) alert(pricePerTravelled);

// and i'm sure i should be using .toFixed(2) although can't get that to work