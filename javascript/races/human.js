var humanMaleNames;
var humanSurnames;
var humanSubraces = ["Calishite", "Chondathan", "Damaran", "Illuskan", "Mulan", "Rashemi", "Shou", "Tethyrian", "Turami"];
var myHumanSubrace = humanSubraces[Math.floor(Math.random() * humanSubraces.length)];

function maleHumanNames() {
  var myHumanMaleName = humanMaleNames[Math.floor(Math.random() * humanMaleNames.length)];
  var myHumanSurname = humanSurnames[Math.floor(Math.random() * humanSurnames.length)];
  $('#name-text').append("<p><strong>" + myHumanMaleName + " " + myHumanSurname + "</strong></p>");
}

function femaleHumanNames() {
  var myHumanFemaleName = humanFemaleNames[Math.floor(Math.random) * humanFemaleNames.length];
  var myHumanSurname = humanSurnames[Math.floor(Math.random) * humanSurnames.length];
  $('#name-text').append("<p><strong>" + myHumanFemaleName + " " + myHumanSurname + "</p></strong>");
}

function maleHuman() {

  switch (myHumanSubrace) {
      case "Calishite":
          humanMaleNames = ["Aseir", "Bardied", "Haseid", "Kehmed", "Mehmen", "Sudeiman", "Zasheir"];
          humanSurnames = ["Basha", "Dumein", "Jassan", "Khalid", "Mostana", "Pasha", "Rein"]
          maleHumanNames();
          break;
      case "Chondathan":
          humanMaleNames = ["Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd"];
          humanSurnames = ["Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag"];
          maleHumanNames();
          break;
      case "Damaran":
          humanMaleNames = ["Bor", "Fodel", "Glar", "Grigor", "Igan", "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor"];
          humanSurnames = ["Bersk", "Chernin", "Dotsk", "Kulenov", "Marsk", "Nemetsk", "Shemov", "Starag"];
          maleHumanNames();
          break;
      case "Illuskan":
          humanMaleNames = ["Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer", "Stor", "Taman", "Urth"];
          humanSurnames = ["Brightwood", "Helder", "Hronraven", "Lackman", "Stormwind", "Windrivver"];
          maleHumanNames();
          break;
      case "Mulan":
          humanMaleNames = ["Aoth", "Bareris", "Ehput-Ki", "Kethoth", "Mumed", "Ramas", "So-Kehur", "Thazar-De", "Urhur"];
          humanSurnames = ["Ankhalab", "Anskuld", "Fezim", "Hahpet", "Nathandem", "Sepret", "Uuthrakt"];
          maleHumanNames();
          break;
      case "Rashemi":
          humanMaleNames = ["Borivik", "Faurgar", "Jandar", "Kanithar", "Madislak", "Ralmevik", "Shaumar", "Vladislak"];
          humanSurnames = ["Chergoba", "Dyernina", "Iltazyara", "Murnyethara", "Stayangoa", "Ulmonkina"];
          maleHumanNames();
          break;
      case "Shou":
          humanMaleNames = ["An", "Chen", "Chi", "Fai", "Jiang", "Jun", "Lian", "long", "Meng", "On", "Shan", "Shui", "Wen"];
          humanSurnames = ["Chien", "Huang", "Kao", "Kung", "Lao", "Ling", "Mei", "Pin", "Shin", "Sum", "Tang", "Wan"];
          maleHumanNames();
          break;
      case "Tethyrian":
          humanMaleNames = ["Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd"];
          humanSurnames = ["Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag"];
          maleHumanNames();
          break;
      case "Turami":
          humanMaleNames = ["Anton", "Diero", "Marcon", "Pieron", "Rimardo", "Romero", "Salazar", "Umbero"];
          humanSurnames = ["Agosto", "Astorio", "Calabra", "Domine", "Falone", "Marivaldi", "Pisacar", "Ramondo"];
          maleHumanNames();
        }
}

function femaleHuman() {

  switch (myHumanSubrace) {
      case "Calishite":
      humanFemaleNames = ["Atala", "Ceidil", "Hama", "Jasmal", "Meilil", "Seipora", "Yasheira", "Zasheida"];
      humanSurnames = ["Basha", "Dumein", "Jassan", "Khalid", "Mostana", "Pasha", "Rein"];
      femaleHumanNames();
          break;
      case "Chondathan":
      humanFemaleNames = ["Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele"];
      humanSurnames = ["Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag"];
      femaleHumanNames();
          break;
      case "Damaran":
      humanFemaleNames = ["Alethra", "Kara", "Katernin", "Mara", "Natali", "Olma", "Tana", "Zora"];
      humanSurnames = ["Bersk", "Chernin", "Dotsk", "Kulenov", "Marsk", "Nemetsk", "Shemov", "Starag"];
      femaleHumanNames();
          break;
      case "Illuskan":
      humanFemaleNames = ["Amafrey", "Betha", "Cefrey", "Kethra", "Mara", "Olga", "Silifrey", "Westra"];
      humanSurnames = ["Brightwood", "Helder", "Hronraven", "Lackman", "Stormwind", "Windrivver"];
      femaleHumanNames();
          break;
      case "Mulan":
      humanFemaleNames = ["Arizima", "Chathi", "Nephis", "Nulara", "Murithi", "Sefris", "Thola", "Umara", "Zolis"];
      humanSurnames = ["Ankhalab", "Anskuld", "Fezim", "Hahpet", "Nathandem", "Sepret", "Uuthrakt"];
      femaleHumanNames();
          break;
      case "Rashemi":
      humanFemaleNames = ["Fyevarra", "Hulmarra", "Immith", "Imzel", "Navarra", "Shevarra", "Tammith", "Yuldra"];
      humanSurnames = ["Chergoba", "Dyernina", "Iltazyara", "Murnyethara", "Stayangoa", "Ulmonkina"];
      femaleHumanNames();
          break;
      case "Shou":
      humanFemaleNames = ["Bai", "Chao", "Jia", "Lei", "Mei", "Qiao", "Shui", "Tai"];
      humanSurnames = ["Chien", "Huang", "Kao", "Kung", "Lao", "Ling", "Mei", "Pin", "Shin", "Sum", "Tang", "Wan"];
      femaleHumanNames();
          break;
      case "Tethyrian":
      humanFemaleNames = ["Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele"];
      humanSurnames = ["Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag"];
      femaleHumanNames();
          break;
      case "Turami":
      humanFemaleNames = ["Balama", "Dona", "Faila", "Jalana", "Luisa", "Marta", "Quara", "Selise", "Vonda"];
      humanSurnames = ["Agosto", "Astorio", "Calabra", "Domine", "Falone", "Marivaldi", "Pisacar", "Ramondo"];
      femaleHumanNames();
    }
}
