function maleElf() {
  var maleElfNames = ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carrac", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"];
  var myMaleElfName = maleElfNames[Math.floor(Math.random() * maleElfNames.length)];
  var elfSurnames = ["Amakiir (Gemflower)", "Amastacia (Starflower)", "Galanodel (Moonwhisper)", "Holimion (Diamonddew)", "Ilphelkiir (Gemblossom)", "Liadon (Silverfrond)", "Meliamne (Oakenheel)", "Na&#207;lo (Nightbreeze)", "Siannodel (Moonbrook)", "Xiloscient (Goldpetal)"];
  var myElfSurname = elfSurnames[Math.floor(Math.random() * elfSurnames.length)];

  $('#name-text').append("<p><strong>" + myMaleElfName + "</strong></p>");
  $('#surname-text').append("<p><strong>" + myElfSurname + "</strong></p>");
}

function femaleElf() {
  var femaleElfNames = ["Adrie", "Althaea", "Anastraianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Navara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"];
  var myFemaleElfName = femaleElfNames[Math.floor(Math.random() * femaleElfNames.length)];
  var elfSurnames = ["Amakiir (Gemflower)", "Amastacia (Starflower)", "Galanodel (Moonwhisper)", "Holimion (Diamonddew)", "Ilphelkiir (Gemblossom)", "Liadon (Silverfrond)", "Meliamne (Oakenheel)", "Na&#207;lo (Nightbreeze)", "Siannodel (Moonbrook)", "Xiloscient (Goldpetal)"];
  var myElfSurname = elfSurnames[Math.floor(Math.random() * elfSurnames.length)];

  $('#name-text').append("<p><strong>" + myFemaleElfName + "</strong></p>");
  $('#surname-text').append("<p><strong>" + myElfSurname + "</strong></p>");
}
