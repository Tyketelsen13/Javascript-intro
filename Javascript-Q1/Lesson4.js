let start location ="";
If (emblemClue1 === "Eagle") {
    startLocation = "Forum";
}
else if (emblemClue1 === "Lion") {
    startLocation = "Colosseum";
}
else {
    startLocation = "Villa";
}

if (emblemClue2 === "Laurel" && startLocation === "Forum") {
    startLocation += "of Augustus";
else if (emblemClue2 === "Grapes" || startLocation === "Villa") {
startLocation += "of Pompey";
}


switch (emblemClue3) {
    case 7: startLocation += "North";
    break;
    case 3: startLocation += "South";
    break;
    case 9: startLocation += "East";
    break;
    case 4: startLocation += "West";
    break;
}
// triple equals checks both value and type and is more strict then douuble equals tries to change them to the same type.