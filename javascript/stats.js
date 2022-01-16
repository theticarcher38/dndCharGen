var stat = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3,
   4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7,
   8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18];

function stats() {
  var myStr = stat[Math.floor(Math.random() * stat.length)];
  console.log("Strength " + myStr);
  var myDex = stat[Math.floor(Math.random() * stat.length)];
  console.log("Dexterity " + myDex);
  var myCon = stat[Math.floor(Math.random() * stat.length)];
  console.log("Constitution " + myCon);
  console.log(myNewCon);
  var myInt = stat[Math.floor(Math.random() * stat.length)];
  console.log("Intelligence " + myInt);
  var myWis = stat[Math.floor(Math.random() * stat.length)];
  console.log("Wisdom " + myWis);
  console.log(myNewWis);
  var myCha = stat[Math.floor(Math.random() * stat.length)];
  console.log("Charisma " + myCha);
  $('#str-text').append("<p>" + myStr + "</p>");

  $('#dex-text').append("<p>" + myDex + "</p>");

  $('#con-text').append("<p>" + myNewCon + "</p>");

  $('#int-text').append("<p>" + myInt + "</p>");

  $('#wis-text').append("<p>" + myNewWis + "</p>");

  $('#cha-text').append("<p>" + myCha + "</p>");
}

// function mountainDwarfStats() {
//   var myStr = str[Math.floor(Math.random() * str.length)];
//   console.log("Strength " + myStr);
//   var myDex = dex[Math.floor(Math.random() * dex.length)];
//   console.log("Dexterity " + myDex);
//   var myCon = con[Math.floor(Math.random() * con.length)];
//   console.log("Constitution " + myCon);
//   var myNewCon = myCon + 2;
//   console.log(myNewCon);
//   var myInt = int[Math.floor(Math.random() * int.length)];
//   console.log("Intelligence " + myInt);
//   var myWis = wis[Math.floor(Math.random() * wis.length)];
//   console.log("Wisdom " + myWis);
//   var myNewWis = myWis + 1;
//   console.log(myNewWis);
//   var myCha = cha[Math.floor(Math.random() * cha.length)];
//   console.log("Charisma " + myCha);
//   $('#str-text').append("<p>" + myStr + "</p>");

//   $('#dex-text').append("<p>" + myDex + "</p>");

//   $('#con-text').append("<p>" + myNewCon + "</p>");

//   $('#int-text').append("<p>" + myInt + "</p>");

//   $('#wis-text').append("<p>" + myNewWis + "</p>");

//   $('#cha-text').append("<p>" + myCha + "</p>");
// }

// function highElfStats() {
//   var myStr = str[Math.floor(Math.random() * str.length)];
//   console.log("Strength " + myStr);
//   var myDex = dex[Math.floor(Math.random() * dex.length)];
//   console.log("Dexterity " + myDex);
//   var myNewDex = myDex + 2;
//   console.log(myNewDex);
//   var myCon = con[Math.floor(Math.random() * con.length)];
//   console.log("Constitution " + myCon);
//   var myInt = int[Math.floor(Math.random() * int.length)];
//   console.log("Intelligence " + myInt);
//   var myNewInt = myInt + 2;
//   console.log(myNewInt)
//   var myWis = wis[Math.floor(Math.random() * wis.length)];
//   console.log("Wisdom " + myWis);
//   var myCha = cha[Math.floor(Math.random() * cha.length)];
//   console.log("Charisma " + myCha);
//   $('#str-text').append("<p>" + myStr + "</p>");

//   $('#dex-text').append("<p>" + myNewDex + "</p>");

//   $('#con-text').append("<p>" + myCon + "</p>");

//   $('#int-text').append("<p>" + myNewInt + "</p>");

//   $('#wis-text').append("<p>" + myWis + "</p>");

//   $('#cha-text').append("<p>" + myCha + "</p>");
// }

// function drowStats() {
//   var myStr = str[Math.floor(Math.random() * str.length)];
//   console.log("Strength " + myStr);
//   var myDex = dex[Math.floor(Math.random() * dex.length)];
//   console.log("Dexterity " + myDex);
//   var myNewDex = myDex + 2;
//   console.log(myNewDex);
//   var myCon = con[Math.floor(Math.random() * con.length)];
//   console.log("Constitution" + myCon);
//   var myInt = int[Math.floor(Math.random() * int.length)];
//   console.log("Intelligence " + myInt);
//   var myWis = wis[Math.floor(Math.random() * wis.length)];
//   console.log("Wisdom " + myWis);
//   var myCha = cha[Math.floor(Math.random() * cha.length)];
//   console.log("Charisma " + myCha);
//   var myNewCha = myCha + 1;
//   console.log(myNewCha);
//   $('#str-text').append("<p>" + myStr + "</p>");

//   $('#dex-text').append("<p>" + myNewDex + "</p>");

//   $('#con-text').append("<p>" + myCon + "</p>");

//   $('#int-text').append("<p>" + myInt + "</p>");

//   $('#wis-text').append("<p>" + myWis + "</p>");

//   $('#cha-text').append("<p>" + myNewCha + "</p>");
// }

// function woodElfStats() {
//   var myStr = str[Math.floor(Math.random() * str.length)];
//   console.log("Strength " + myStr);
//   var myDex = dex[Math.floor(Math.random() * dex.length)];
//   console.log("Dexterity " + myDex);
//   var myNewDex = myDex + 2;
//   console.log(myNewDex);
//   var myCon = con[Math.floor(Math.random() * con.length)];
//   console.log("Constitution" + myCon);
//   var myInt = int[Math.floor(Math.random() * int.length)];
//   console.log("Intelligence " + myInt);
//   var myWis = wis[Math.floor(Math.random() * wis.length)];
//   console.log("Wisdom " + myWis);
//   var myNewWis = myWis + 1;
//   console.log(myNewWis);
//   var myCha = cha[Math.floor(Math.random() * cha.length)];
//   console.log("Charisma " + myCha);
//   $('#str-text').append("<p>" + myStr + "</p>");

//   $('#dex-text').append("<p>" + myNewDex + "</p>");

//   $('#con-text').append("<p>" + myCon + "</p>");

//   $('#int-text').append("<p>" + myInt + "</p>");

//   $('#wis-text').append("<p>" + myNewWis + "</p>");

//   $('#cha-text').append("<p>" + myCha + "</p>");
// }

// function lightfootHalflingStats() {
//   var myStr = str[Math.floor(Math.random() * str.length)];
//   console.log("Strength " + myStr);
//   var myDex = dex[Math.floor(Math.random() * dex.length)];
//   console.log("Dexterity " + myDex);
//   var myNewDex = myDex + 2;
//   console.log(myNewDex)
//   var myCon = con[Math.floor(Math.random() * con.length)];
//   console.log("Constitution " + myCon);
//   var myInt = int[Math.floor(Math.random() * int.length)];
//   console.log("Intelligence " + myInt);
//   var myWis = wis[Math.floor(Math.random() * wis.length)];
//   console.log("Wisdom " + myWis);
//   var myCha = cha[Math.floor(Math.random() * cha.length)];
//   console.log("Charisma " + myCha);
//   var myNewCha = myCha + 1;
//   console.log(myNewCha);
//   $('#str-text').append("<p>" + myStr + "</p>");

//   $('#dex-text').append("<p>" + myNewDex + "</p>");

//   $('#con-text').append("<p>" + myCon + "</p>");

//   $('#int-text').append("<p>" + myInt + "</p>");

//   $('#wis-text').append("<p>" + myWis + "</p>");

//   $('#cha-text').append("<p>" + myNewCha + "</p>");
// }

// function stoutHalflingStats() {
//   var myStr = str[Math.floor(Math.random() * str.length)];
//   console.log("Strength " + myStr);
//   var myDex = dex[Math.floor(Math.random() * dex.length)];
//   console.log("Dexterity " + myDex);
//   var myNewDex = myDex + 2;
//   console.log(myNewDex)
//   var myCon = con[Math.floor(Math.random() * con.length)];
//   console.log("Constitution " + myCon);
//   var myNewCon = myCon + 1;
//   console.log(myNewCon);
//   var myInt = int[Math.floor(Math.random() * int.length)];
//   console.log("Intelligence " + myInt);
//   var myWis = wis[Math.floor(Math.random() * wis.length)];
//   console.log("Wisdom " + myWis);
//   var myCha = cha[Math.floor(Math.random() * cha.length)];
//   console.log("Charisma " + myCha);
//   $('#str-text').append("<p>" + myStr + "</p>");

//   $('#dex-text').append("<p>" + myNewDex + "</p>");

//   $('#con-text').append("<p>" + myNewCon + "</p>");

//   $('#int-text').append("<p>" + myInt + "</p>");

//   $('#wis-text').append("<p>" + myWis + "</p>");

//   $('#cha-text').append("<p>" + myCha + "</p>");
// }

// function humanStats() {
//   var myStr = str[Math.floor(Math.random() * str.length)];
//   console.log("Strength " + myStr);
//   var myNewStr = myStr + 1;
//   console.log(myNewStr);
//   var myDex = dex[Math.floor(Math.random() * dex.length)];
//   console.log("Dexterity " + myDex);
//   var myNewDex = myDex + 1;
//   console.log(myNewDex);
//   var myCon = con[Math.floor(Math.random() * con.length)];
//   console.log("Constitution " + myCon);
//   var myNewCon = myCon + 1;
//   console.log(myNewCon);
//   var myInt = int[Math.floor(Math.random() * int.length)];
//   console.log("Intelligence " + myInt);
//   var myNewInt = myInt + 1;
//   console.log(myNewInt);
//   var myWis = wis[Math.floor(Math.random() * wis.length)];
//   console.log("Wisdom " + myWis);
//   var myNewWis = myWis + 1;
//   console.log(myNewWis);
//   var myCha = cha[Math.floor(Math.random() * cha.length)];
//   console.log("Charisma " + myCha);
//   var myNewCha = myCha + 1;
//   console.log(myNewCha);

//   $('#str-text').append("<p>" + myNewStr + "</p>");

//   $('#dex-text').append("<p>" + myNewDex + "</p>");

//   $('#con-text').append("<p>" + myNewCon + "</p>");

//   $('#int-text').append("<p>" + myNewInt + "</p>");

//   $('#wis-text').append("<p>" + myNewWis + "</p>");

//   $('#cha-text').append("<p>" + myNewCha + "</p>");
// }

// function dragonbornStats() {
//   var myStr = str[Math.floor(Math.random() * str.length)];
//   console.log("Strength " + myStr);
//   var myNewStr = myStr + 2
//   console.log(myNewStr);
//   var myDex = dex[Math.floor(Math.random() * dex.length)];
//   console.log("Dexterity " + myDex);
//   var myCon = con[Math.floor(Math.random() * con.length)];
//   console.log("Constitution " + myCon);
//   var myInt = int[Math.floor(Math.random() * int.length)];
//   console.log("Intelligence " + myInt);
//   var myWis = wis[Math.floor(Math.random() * wis.length)];
//   console.log("Wisdom " + myWis);
//   var myCha = cha[Math.floor(Math.random() * cha.length)];
//   console.log("Charisma " + myCha);
//   var myNewCha = myCha + 1
//   console.log(myNewCha);
//   $('#str-text').append("<p>" + myNewStr + "</p>");

//   $('#dex-text').append("<p>" + myDex + "</p>");

//   $('#con-text').append("<p>" + myCon + "</p>");

//   $('#int-text').append("<p>" + myInt + "</p>");

//   $('#wis-text').append("<p>" + myWis + "</p>");

//   $('#cha-text').append("<p>" + myNewCha + "</p>");
// }

// function gnomeStats() {
//   var myStr = str[Math.floor(Math.random() * str.length)];
//   console.log("Strength " + myStr);
//   var myDex = dex[Math.floor(Math.random() * dex.length)];
//   console.log("Dexterity " + myDex);
//   var myCon = con[Math.floor(Math.random() * con.length)];
//   console.log("Constitution " + myCon);
//   var myInt = int[Math.floor(Math.random() * int.length)];
//   console.log("Intelligence " + myInt);
//   var myNewInt = myInt + 2
//   console.log(myNewInt);
//   var myWis = wis[Math.floor(Math.random() * wis.length)];
//   console.log("Wisdom " + myWis);
//   var myCha = cha[Math.floor(Math.random() * cha.length)];
//   console.log("Charisma " + myCha);
//   $('#str-text').append("<p>" + myStr + "</p>");

//   $('#dex-text').append("<p>" + myDex + "</p>");

//   $('#con-text').append("<p>" + myCon + "</p>");

//   $('#int-text').append("<p>" + myNewInt + "</p>");

//   $('#wis-text').append("<p>" + myWis + "</p>");

//   $('#cha-text').append("<p>" + myCha + "</p>");
// }

// function halfElfStats() {
//   var myStr = str[Math.floor(Math.random() * str.length)];
//   console.log("Strength " + myStr);
//   var myDex = dex[Math.floor(Math.random() * dex.length)];
//   console.log("Dexterity " + myDex);
//   var myCon = con[Math.floor(Math.random() * con.length)];
//   console.log("Constitution " + myCon);
//   var myInt = int[Math.floor(Math.random() * int.length)];
//   console.log("Intelligence " + myInt);
//   var myNewInt = myInt + 2
//   console.log(myNewInt);
//   var myWis = wis[Math.floor(Math.random() * wis.length)];
//   console.log("Wisdom " + myWis);
//   var myCha = cha[Math.floor(Math.random() * cha.length)];
//   console.log("Charisma " + myCha);
//   $('#str-text').append("<p>" + myStr + "</p>");

//   $('#dex-text').append("<p>" + myDex + "</p>");

//   $('#con-text').append("<p>" + myCon + "</p>");

//   $('#int-text').append("<p>" + myNewInt + "</p>");

//   $('#wis-text').append("<p>" + myWis + "</p>");

//   $('#cha-text').append("<p>" + myCha + "</p>");
// }

// function halfOrcStats() {
//   var myStr = str[Math.floor(Math.random() * str.length)];
//   console.log("Strength " + myStr);
//   var myNewStr = myStr + 2
//   console.log(myNewStr);
//   var myDex = dex[Math.floor(Math.random() * dex.length)];
//   console.log("Dexterity" + myDex);
//   var myCon = con[Math.floor(Math.random() * con.length)];
//   console.log("Constitution " + myCon);
//   var myNewCon = myCon + 1
//   console.log(myNewCon);
//   var myInt = int[Math.floor(Math.random() * int.length)];
//   console.log("Intelligence " + myInt);
//   var myWis = wis[Math.floor(Math.random() * wis.length)];
//   console.log("Wisdom " + myWis);
//   var myCha = cha[Math.floor(Math.random() * cha.length)];
//   console.log("Charisma " + myCha);
//   $('#str-text').append("<p>" + myNewStr + "</p>");

//   $('#dex-text').append("<p>" + myDex + "</p>");

//   $('#con-text').append("<p>" + myNewCon + "</p>");

//   $('#int-text').append("<p>" + myInt + "</p>");

//   $('#wis-text').append("<p>" + myWis + "</p>");

//   $('#cha-text').append("<p>" + myCha + "</p>");
// }

// function tieflingStats() {
//   var myStr = str[Math.floor(Math.random() * str.length)];
//   console.log("Strength " + myStr);
//   var myNewStr = myStr + 2
//   console.log(myNewStr);
//   var myDex = dex[Math.floor(Math.random() * dex.length)];
//   console.log("Dexterity" + myDex);
//   var myCon = con[Math.floor(Math.random() * con.length)];
//   console.log("Constitution " + myCon);
//   var myNewCon = myCon + 1
//   console.log(myNewCon);
//   var myInt = int[Math.floor(Math.random() * int.length)];
//   console.log("Intelligence " + myInt);
//   var myWis = wis[Math.floor(Math.random() * wis.length)];
//   console.log("Wisdom " + myWis);
//   var myCha = cha[Math.floor(Math.random() * cha.length)];
//   console.log("Charisma " + myCha);
//   $('#str-text').append("<p>" + myNewStr + "</p>");

//   $('#dex-text').append("<p>" + myDex + "</p>");

//   $('#con-text').append("<p>" + myNewCon + "</p>");

//   $('#int-text').append("<p>" + myInt + "</p>");

//   $('#wis-text').append("<p>" + myWis + "</p>");

//   $('#cha-text').append("<p>" + myCha + "</p>");
// }
