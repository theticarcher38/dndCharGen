function maleHalfling() {
  var maleHalflingNames = ["Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby"];
  var myMaleHalflingName = maleHalflingNames[Math.floor(Math.random() * maleHalflingNames.length)];
  var halflingSurnames = ["Brushgather", "Goodbarrel", "Greenbottle", "High-hill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough"];
  var myHalflingSurname = halflingSurnames[Math.floor(Math.random() * halflingSurnames.length)];

  $('#name-text').append("<p><strong>" + myMaleHalflingName + "</strong></p>");
  $('#surname-text').append("<p><strong>" + myHalflingSurname + "</strong></p>");
}

function femaleHalfling() {
  var femaleHalfingNames = ["Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"];
  var myFemaleHalflingName = femaleHalfingNames[Math.floor(Math.random() * femaleHalfingNames.length)];
  var halflingSurnames = ["Brushgather", "Goodbarrel", "Greenbottle", "High-hill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough"];
  var myHalflingSurname = halflingSurnames[Math.floor(Math.random() * halflingSurnames.length)];

  $('#name-text').append("<p><strong>" + myFemaleHalflingName + "</strong></p>");
  $('#surname-text').append("<p><strong>" + myHalflingSurname + "</strong></p>");
}
