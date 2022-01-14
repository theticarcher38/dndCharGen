function maleDwarf() {
  var maleDwarfName = ["Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"];
  var myMaleDwarfName = maleDwarfName[Math.floor(Math.random() * maleDwarfName.length)];
  var dwarfSurames = ["Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgher", "Rumnaheim", "Strakeln", "Torunn", "Ungart"];
  var myDwarfSurname = dwarfSurames[Math.floor(Math.random() * dwarfSurames.length)];

  $('#name-text').append("<p><strong>" + myMaleDwarfName + "</strong></p>");
  $('#surname-text').append("<p><strong>" + myDwarfSurname + "</strong></p>");
}

function femaleDwarf() {
  var femaleDwarfName = [
    "Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"];
  var myFemaleDwarfName = femaleDwarfName[Math.floor(Math.random() * femaleDwarfName.length)];
  var dwarfSurames = ["Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgher", "Rumnaheim", "Strakeln", "Torunn", "Ungart"];
  var myDwarfSurname = dwarfSurames[Math.floor(Math.random() * dwarfSurames.length)];

  $('#name-text').append("<p><strong>" + myFemaleDwarfName + "</strong></p>");
  $('#surname-text').append("<p><strong>" + myDwarfSurname + "</strong></p>");
}
