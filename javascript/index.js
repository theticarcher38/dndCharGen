    //stat variables
    var str = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18];
    var dex = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18];
    var con = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18];
    var int = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18];
    var wis = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18];
    var cha = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18];

    /*
    [0] - Dwarf
    [1] - Elf
    [2] - Halfling
    [3] - Human
    [4] - Dragonborn
    [5] - Gnome
    [6] - Half-Elf
    [7] - Half-Orc
    [8] - Tiefling
    */
    var race = ["Hill Dwarf", "Mountain Dwarf", "High Elf", "Drow", "Wood Elf", "Lightfoot Halfling", "Stout Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"];
    var myRace = race[Math.floor(Math.random() * race.length)];
    console.log(myRace);

    var gender = ["Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female"];
    var myGender = gender[Math.floor(Math.random() * gender.length)];
    console.log(myGender);

    var maleDwarfName = ["Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"];
    var myMaleDwarfName = maleDwarfName[Math.floor(Math.random() * maleDwarfName.length)];
    var femaleDwarfName = ["Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"];
    var myFemaleDwarfName = femaleDwarfName[Math.floor(Math.random() * femaleDwarfName.length)];
    var dwarfSurames = ["Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgher", "Rumnaheim", "Strakeln", "Torunn", "Ungart"];
    var myDwarfSurname = dwarfSurames[Math.floor(Math.random() * dwarfSurames.length)];

    var maleElfNames = ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carrac", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"];
    var myMaleElfName = maleElfNames[Math.floor(Math.random() * maleElfNames.length)];
    var femaleElfNames = ["Adrie", "Althaea", "Anastraianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Navara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"];
    var myFemaleElfName = femaleElfNames[Math.floor(Math.random() * femaleElfNames.length)];
    var elfSurnames = ["Amakiir (Gemflower)", "Amastacia (Starflower)", "Galanodel (Moonwhisper)", "Holimion (Diamonddew)", "Ilphelkiir (Gemblossom)", "Liadon (Silverfrond)", "Meliamne (Oakenheel)", "Na&#207;lo (Nightbreeze)", "Siannodel (Moonbrook)", "Xiloscient (Goldpetal)"];
    var myElfSurname = elfSurnames[Math.floor(Math.random() * elfSurnames.length)];

    var maleHalflingNames = ["Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby"];
    var myMaleHalflingName = maleHalflingNames[Math.floor(Math.random() * maleHalflingNames.length)];
    var femaleHalfingNames = ["Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"];
    var myFemaleHalflingName = femaleHalfingNames[Math.floor(Math.random() * femaleHalfingNames.length)];
    var halflingSurnames = ["Brushgather", "Goodbarrel", "Greenbottle", "High-hill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough"];
    var myHalflingSurname = halflingSurnames[Math.floor(Math.random() * halflingSurnames.length)];

    var humanMaleNames;
    var humanSurnames;

    function maleHumanNames() {
      var myHumanMaleName = humanMaleNames[Math.floor(Math.random() * humanMaleNames.length)];
      var myHumanSurname = humanSurnames[Math.floor(Math.random() * humanSurnames.length)];
      $('#name-text').append("<p><strong>" + myHumanMaleName + " " + myHumanSurname + "</strong></p>");
    }



    $(document).ready(function () {
        switch (myRace) {
            case "Hill Dwarf":
                switch (myGender) {
                    case "Male":
                        $('#name-text').append("<p><strong>" + myMaleDwarfName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myDwarfSurname + "</strong></p>");
                        break;
                    case "Female":
                        $('#name-text').append("<p><strong>" + myFemaleDwarfName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myDwarfSurname + "</strong></p>");
                }
                var myStr = str[Math.floor(Math.random() * str.length)];
                console.log("Strength " + myStr);
                var myDex = dex[Math.floor(Math.random() * dex.length)];
                console.log("Dexterity " + myDex);
                var myCon = con[Math.floor(Math.random() * con.length)];
                console.log("Constitution " + myCon);
                var myNewCon = myCon + 2;
                console.log(myNewCon);
                var myInt = int[Math.floor(Math.random() * int.length)];
                console.log("Intelligence " + myInt);
                var myWis = wis[Math.floor(Math.random() * wis.length)];
                console.log("Wisdom " + myWis);
                var myNewWis = myWis + 1;
                console.log(myNewWis);
                var myCha = cha[Math.floor(Math.random() * cha.length)];
                console.log("Charisma " + myCha);
                $('#str-text').append("<p>" + myStr + "</p>");

                $('#dex-text').append("<p>" + myDex + "</p>");

                $('#con-text').append("<p>" + myNewCon + "</p>");

                $('#int-text').append("<p>" + myInt + "</p>");

                $('#wis-text').append("<p>" + myNewWis + "</p>");

                $('#cha-text').append("<p>" + myCha + "</p>");
                break;
            case "Mountain Dwarf":
                switch (myGender) {
                    case "Male":
                        $('#name-text').append("<p><strong>" + myMaleDwarfName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myDwarfSurname + "</strong></p>");
                        break;
                    case "Female":
                        $('#name-text').append("<p><strong>" + myFemaleDwarfName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myDwarfSurname + "</strong></p>");
                }
                var myStr = str[Math.floor(Math.random() * str.length)];
                console.log("Strength " + myStr);
                var myNewStr = myStr + 2;
                console.log(myNewStr);
                var myDex = dex[Math.floor(Math.random() * dex.length)];
                console.log("Dexterity " + myDex);
                var myCon = con[Math.floor(Math.random() * con.length)];
                console.log("Constitution " + myCon);
                var myNewCon = myCon + 2;
                console.log(myNewCon);
                var myInt = int[Math.floor(Math.random() * int.length)];
                console.log("Intelligence " + myInt);
                var myWis = wis[Math.floor(Math.random() * wis.length)];
                console.log("Wisdom " + myWis);
                var myCha = cha[Math.floor(Math.random() * cha.length)];
                console.log("Charisma " + myCha);
                $('#str-text').append("<p>" + myNewStr + "</p>");

                $('#dex-text').append("<p>" + myDex + "</p>");

                $('#con-text').append("<p>" + myNewCon + "</p>");

                $('#int-text').append("<p>" + myInt + "</p>");

                $('#wis-text').append("<p>" + myWis + "</p>");

                $('#cha-text').append("<p>" + myCha + "</p>");
                break;
            case "High Elf":
                switch (myGender) {
                    case "Male":
                        $('#name-text').append("<p><strong>" + myMaleElfName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myElfSurname + "</strong></p>");
                        break;
                    case "Female":
                        $('#name-text').append("<p><strong>" + myFemaleElfName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myElfSurname + "</strong></p>");
                }
                var myStr = str[Math.floor(Math.random() * str.length)];
                console.log("Strength " + myStr);
                var myDex = dex[Math.floor(Math.random() * dex.length)];
                console.log("Dexterity " + myDex);
                var myNewDex = myDex + 2;
                console.log(myNewDex);
                var myCon = con[Math.floor(Math.random() * con.length)];
                console.log("Constitution" + myCon);
                var myInt = int[Math.floor(Math.random() * int.length)];
                console.log("Intelligence " + myInt);
                var myNewInt = myInt + 2;
                console.log(myNewInt)
                var myWis = wis[Math.floor(Math.random() * wis.length)];
                console.log("Wisdom " + myWis);
                var myCha = cha[Math.floor(Math.random() * cha.length)];
                console.log("Charisma " + myCha);
                $('#str-text').append("<p>" + myStr + "</p>");

                $('#dex-text').append("<p>" + myNewDex + "</p>");

                $('#con-text').append("<p>" + myCon + "</p>");

                $('#int-text').append("<p>" + myNewInt + "</p>");

                $('#wis-text').append("<p>" + myWis + "</p>");

                $('#cha-text').append("<p>" + myCha + "</p>");
                break;
            case "Drow":
                switch (myGender) {
                    case "Male":
                        $('#name-text').append("<p><strong>" + myMaleElfName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myElfSurname + "</strong></p>");
                        break;
                    case "Female":
                        $('#name-text').append("<p><strong>" + myFemaleElfName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myElfSurname + "</strong></p>");
                }
                var myStr = str[Math.floor(Math.random() * str.length)];
                console.log("Strength " + myStr);
                var myDex = dex[Math.floor(Math.random() * dex.length)];
                console.log("Dexterity " + myDex);
                var myNewDex = myDex + 2;
                console.log(myNewDex);
                var myCon = con[Math.floor(Math.random() * con.length)];
                console.log("Constitution" + myCon);
                var myInt = int[Math.floor(Math.random() * int.length)];
                console.log("Intelligence " + myInt);
                var myWis = wis[Math.floor(Math.random() * wis.length)];
                console.log("Wisdom " + myWis);
                var myCha = cha[Math.floor(Math.random() * cha.length)];
                console.log("Charisma " + myCha);
                var myNewCha = myCha + 1;
                console.log(myNewCha);
                $('#str-text').append("<p>" + myStr + "</p>");

                $('#dex-text').append("<p>" + myNewDex + "</p>");

                $('#con-text').append("<p>" + myCon + "</p>");

                $('#int-text').append("<p>" + myInt + "</p>");

                $('#wis-text').append("<p>" + myWis + "</p>");

                $('#cha-text').append("<p>" + myNewCha + "</p>");
                break;
            case "Wood Elf":
                switch (myGender) {
                    case "Male":
                        $('#name-text').append("<p><strong>" + myMaleElfName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myElfSurname + "</strong></p>");
                        break;
                    case "Female":
                        $('#name-text').append("<p><strong>" + myFemaleElfName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myElfSurname + "</strong></p>");
                }
                var myStr = str[Math.floor(Math.random() * str.length)];
                console.log("Strength " + myStr);
                var myDex = dex[Math.floor(Math.random() * dex.length)];
                console.log("Dexterity " + myDex);
                var myNewDex = myDex + 2;
                console.log(myNewDex);
                var myCon = con[Math.floor(Math.random() * con.length)];
                console.log("Constitution" + myCon);
                var myInt = int[Math.floor(Math.random() * int.length)];
                console.log("Intelligence " + myInt);
                var myWis = wis[Math.floor(Math.random() * wis.length)];
                console.log("Wisdom " + myWis);
                var myNewWis = myWis + 1;
                console.log(myNewWis);
                var myCha = cha[Math.floor(Math.random() * cha.length)];
                console.log("Charisma " + myCha);
                $('#str-text').append("<p>" + myStr + "</p>");

                $('#dex-text').append("<p>" + myNewDex + "</p>");

                $('#con-text').append("<p>" + myCon + "</p>");

                $('#int-text').append("<p>" + myInt + "</p>");

                $('#wis-text').append("<p>" + myNewWis + "</p>");

                $('#cha-text').append("<p>" + myCha + "</p>");
                break;
            case "Lightfoot Halfling":
                switch (myGender) {
                    case "Male":
                        $('#name-text').append("<p><strong>" + myMaleHalflingName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myHalflingSurname + "</strong></p>");
                        break;
                    case "Female":
                        $('#name-text').append("<p><strong>" + myFemaleHalflingName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myHalflingSurname + "</strong></p>");
                }
                var myStr = str[Math.floor(Math.random() * str.length)];
                console.log("Strength " + myStr);
                var myDex = dex[Math.floor(Math.random() * dex.length)];
                console.log("Dexterity " + myDex);
                var myNewDex = myDex + 2;
                console.log(myNewDex)
                var myCon = con[Math.floor(Math.random() * con.length)];
                console.log("Constitution " + myCon);
                var myInt = int[Math.floor(Math.random() * int.length)];
                console.log("Intelligence " + myInt);
                var myWis = wis[Math.floor(Math.random() * wis.length)];
                console.log("Wisdom " + myWis);
                var myCha = cha[Math.floor(Math.random() * cha.length)];
                console.log("Charisma " + myCha);
                var myNewCha = myCha + 1;
                console.log(myNewCha);
                $('#str-text').append("<p>" + myStr + "</p>");

                $('#dex-text').append("<p>" + myNewDex + "</p>");

                $('#con-text').append("<p>" + myCon + "</p>");

                $('#int-text').append("<p>" + myInt + "</p>");

                $('#wis-text').append("<p>" + myWis + "</p>");

                $('#cha-text').append("<p>" + myNewCha + "</p>");
                break;
            case "Stout Halfling":
                switch (myGender) {
                    case "Male":
                        $('#name-text').append("<p><strong>" + myMaleHalflingName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myHalflingSurname + "</strong></p>");
                        break;
                    case "Female":
                        $('#name-text').append("<p><strong>" + myFemaleHalflingName + "</strong></p>");
                        $('#surname-text').append("<p><strong>" + myHalflingSurname + "</strong></p>");
                }
                var myStr = str[Math.floor(Math.random() * str.length)];
                console.log("Strength " + myStr);
                var myDex = dex[Math.floor(Math.random() * dex.length)];
                console.log("Dexterity " + myDex);
                var myNewDex = myDex + 2;
                console.log(myNewDex)
                var myCon = con[Math.floor(Math.random() * con.length)];
                console.log("Constitution " + myCon);
                var myNewCon = myCon + 1;
                console.log(myNewCon);
                var myInt = int[Math.floor(Math.random() * int.length)];
                console.log("Intelligence " + myInt);
                var myWis = wis[Math.floor(Math.random() * wis.length)];
                console.log("Wisdom " + myWis);
                var myCha = cha[Math.floor(Math.random() * cha.length)];
                console.log("Charisma " + myCha);
                $('#str-text').append("<p>" + myStr + "</p>");

                $('#dex-text').append("<p>" + myNewDex + "</p>");

                $('#con-text').append("<p>" + myNewCon + "</p>");

                $('#int-text').append("<p>" + myInt + "</p>");

                $('#wis-text').append("<p>" + myWis + "</p>");

                $('#cha-text').append("<p>" + myCha + "</p>");
                break;
            case "Human":
                var humanSubraces = ["Calishite", "Chondathan", "Damaran", "Illuskan", "Mulan", "Rashemi", "Shou", "Tethyrian", "Turami"];
                var myHumanSubrace = humanSubraces[Math.floor(Math.random() * humanSubraces.length)];
                console.log(myHumanSubrace);
                switch (myGender) {
                    case "Male":
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
                        break;
                    case "Female":
                            switch (myHumanSubrace) {
                                case "Calishite":

                                    break;
                                case "Chondathan":

                                    break;
                                case "Damaran":

                                    break;
                                case "Illuskan":

                                    break;
                                case "Mulan":

                                    break;
                                case "Rashemi":

                                    break;
                                case "Shou":

                                    break;
                                case "Tethyrian":

                                    break;
                                case "Turami":

                            }
                }
                var myStr = str[Math.floor(Math.random() * str.length)];
                console.log("Strength " + myStr);
                var myNewStr = myStr + 1;
                console.log(myNewStr);
                var myDex = dex[Math.floor(Math.random() * dex.length)];
                console.log("Dexterity " + myDex);
                var myNewDex = myDex + 1;
                console.log(myNewDex);
                var myCon = con[Math.floor(Math.random() * con.length)];
                console.log("Constitution " + myCon);
                var myNewCon = myCon + 1;
                console.log(myNewCon);
                var myInt = int[Math.floor(Math.random() * int.length)];
                console.log("Intelligence " + myInt);
                var myNewInt = myInt + 1;
                console.log(myNewInt);
                var myWis = wis[Math.floor(Math.random() * wis.length)];
                console.log("Wisdom " + myWis);
                var myNewWis = myWis + 1;
                console.log(myNewWis);
                var myCha = cha[Math.floor(Math.random() * cha.length)];
                console.log("Charisma " + myCha);
                var myNewCha = myCha + 1;
                console.log(myNewCha);

                $('#str-text').append("<p>" + myNewStr + "</p>");

                $('#dex-text').append("<p>" + myNewDex + "</p>");

                $('#con-text').append("<p>" + myNewCon + "</p>");

                $('#int-text').append("<p>" + myNewInt + "</p>");

                $('#wis-text').append("<p>" + myNewWis + "</p>");

                $('#cha-text').append("<p>" + myNewCha + "</p>");
                break;
            case "Dragonborn":
                switch (myGender) {

                }
                var myStr = str[Math.floor(Math.random() * str.length)];
                console.log("Strength " + myStr);
                var myNewStr = myStr + 2
                console.log(myNewStr);
                var myDex = dex[Math.floor(Math.random() * dex.length)];
                console.log("Dexterity " + myDex);
                var myCon = con[Math.floor(Math.random() * con.length)];
                console.log("Constitution " + myCon);
                var myInt = int[Math.floor(Math.random() * int.length)];
                console.log("Intelligence " + myInt);
                var myWis = wis[Math.floor(Math.random() * wis.length)];
                console.log("Wisdom " + myWis);
                var myCha = cha[Math.floor(Math.random() * cha.length)];
                console.log("Charisma " + myCha);
                var myNewCha = myCha + 1
                console.log(myNewCha);
                $('#str-text').append("<p>" + myNewStr + "</p>");

                $('#dex-text').append("<p>" + myDex + "</p>");

                $('#con-text').append("<p>" + myCon + "</p>");

                $('#int-text').append("<p>" + myInt + "</p>");

                $('#wis-text').append("<p>" + myWis + "</p>");

                $('#cha-text').append("<p>" + myNewCha + "</p>");
                break;
            case "Gnome":
                switch (myGender) {

                }
                var myStr = str[Math.floor(Math.random() * str.length)];
                console.log("Strength " + myStr);
                var myDex = dex[Math.floor(Math.random() * dex.length)];
                console.log("Dexterity " + myDex);
                var myCon = con[Math.floor(Math.random() * con.length)];
                console.log("Constitution " + myCon);
                var myInt = int[Math.floor(Math.random() * int.length)];
                console.log("Intelligence " + myInt);
                var myNewInt = myInt + 2
                console.log(myNewInt);
                var myWis = wis[Math.floor(Math.random() * wis.length)];
                console.log("Wisdom " + myWis);
                var myCha = cha[Math.floor(Math.random() * cha.length)];
                console.log("Charisma " + myCha);
                $('#str-text').append("<p>" + myStr + "</p>");

                $('#dex-text').append("<p>" + myDex + "</p>");

                $('#con-text').append("<p>" + myCon + "</p>");

                $('#int-text').append("<p>" + myNewInt + "</p>");

                $('#wis-text').append("<p>" + myWis + "</p>");

                $('#cha-text').append("<p>" + myCha + "</p>");
                break;
            case "Half-Elf":
                switch (myGender) {

                }
                var myStr = str[Math.floor(Math.random() * str.length)];
                console.log("Strength " + myStr);
                var myDex = dex[Math.floor(Math.random() * dex.length)];
                console.log("Dexterity " + myDex);
                var myNewDex = myDex + 1
                console.log(myNewDex);
                var myCon = con[Math.floor(Math.random() * con.length)];
                console.log("Constitution " + myCon);
                var myInt = int[Math.floor(Math.random() * int.length)];
                console.log("Intelligence " + myInt);
                var myWis = wis[Math.floor(Math.random() * wis.length)];
                console.log("Wisdom " + myWis);
                var myCha = cha[Math.floor(Math.random() * cha.length)];
                console.log("Charisma " + myCha);
                var myNewCha = myCha + 2
                console.log(myNewCha);
                $('#str-text').append("<p>" + myStr + "</p>");

                $('#dex-text').append("<p>" + myNewDex + "</p>");

                $('#con-text').append("<p>" + myCon + "</p>");

                $('#int-text').append("<p>" + myInt + "</p>");

                $('#wis-text').append("<p>" + myWis + "</p>");

                $('#cha-text').append("<p>" + myNewCha + "</p>");
                break;
            case "Half-Orc":
                switch (myGender) {

                }
                var myStr = str[Math.floor(Math.random() * str.length)];
                console.log("Strength " + myStr);
                var myNewStr = myStr + 2
                console.log(myNewStr);
                var myDex = dex[Math.floor(Math.random() * dex.length)];
                console.log("Dexterity" + myDex);
                var myCon = con[Math.floor(Math.random() * con.length)];
                console.log("Constitution " + myCon);
                var myNewCon = myCon + 1
                console.log(myNewCon);
                var myInt = int[Math.floor(Math.random() * int.length)];
                console.log("Intelligence " + myInt);
                var myWis = wis[Math.floor(Math.random() * wis.length)];
                console.log("Wisdom " + myWis);
                var myCha = cha[Math.floor(Math.random() * cha.length)];
                console.log("Charisma " + myCha);
                $('#str-text').append("<p>" + myNewStr + "</p>");

                $('#dex-text').append("<p>" + myDex + "</p>");

                $('#con-text').append("<p>" + myNewCon + "</p>");

                $('#int-text').append("<p>" + myInt + "</p>");

                $('#wis-text').append("<p>" + myWis + "</p>");

                $('#cha-text').append("<p>" + myCha + "</p>");
                break;
            case "Tiefling":
                switch (myGender) {

                }
                var myStr = str[Math.floor(Math.random() * str.length)];
                console.log("Strength " + myStr);
                var myDex = dex[Math.floor(Math.random() * dex.length)];
                console.log("Dexterity " + myDex);
                var myCon = con[Math.floor(Math.random() * con.length)];
                console.log("Constitution " + myCon);
                var myInt = int[Math.floor(Math.random() * int.length)];
                console.log("Intelligence " + myInt);
                var myNewInt = myInt + 1
                console.log(myNewInt);
                var myWis = wis[Math.floor(Math.random() * wis.length)];
                console.log("Wisdom " + myWis);
                var myCha = cha[Math.floor(Math.random() * cha.length)];
                console.log("Charisma " + myCha);
                var myNewCha = myCha + 2
                console.log(myNewCha);
                $('#str-text').append("<p>" + myStr + "</p>");

                $('#dex-text').append("<p>" + myDex + "</p>");

                $('#con-text').append("<p>" + myCon + "</p>");

                $('#int-text').append("<p>" + myNewInt + "</p>");

                $('#wis-text').append("<p>" + myWis + "</p>");

                $('#cha-text').append("<p>" + myNewCha + "</p>");
                break;

        }

        switch (myRace) {
          case "Human":
            $('#race-text').append("<p>" + myHumanSubrace + "(human)" + "</p>");
            break;

          default:
            $('#race-text').append("<p>" + myRace + "</p>");
            break;
        }

    })
