const guests = ["ANTHONY", "CICERO", "CASSIUS", "CLEOPATRA"];
guests.unshift ("BRUTUS");
// You can use guests[0]
guests.push ("AUGUSTUS", "LUCIA");
const spartacusIndex = guests.indexOf("SPARTACUS");
// Spartacus is not on the list so it is index of -1
const indexToRemove = guests.indexOf("CASSIUS");
guests.splice (indexToRemove, 1);
const specialGuests = guests.slice(0, 3);

const honoredGuests = guests.slice(0, 1);
const otherGuests= guests.slice (1);
otherGuests.sort();
honoredGuests.concat(otherGuests);