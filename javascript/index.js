    var race = ["Hill Dwarf", "Mountain Dwarf", "High Elf", "Drow", "Wood Elf", "Lightfoot Halfling",
     "Stout Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"];
    var myRace = race[Math.floor(Math.random() * race.length)];
    console.log(myRace);

    var gender = ["Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female", "Male", "Female"];
    var myGender = gender[Math.floor(Math.random() * gender.length)];
    console.log(myGender);



    $(document).ready(function () {
        switch (myRace) {
            case "Hill Dwarf":
                switch (myGender) {
                    case "Male":
                        maleDwarf();
                        break;
                    case "Female":
                        femaleDwarf();
                }
                hillDwarfStats();
                break;
            case "Mountain Dwarf":
                switch (myGender) {
                    case "Male":
                        maleDwarf();
                        break;
                    case "Female":
                        femaleDwarf();
                }
                mountainDwarfStats();
                break;
            case "High Elf":
                switch (myGender) {
                    case "Male":
                        maleElf();
                        break;
                    case "Female":
                        femaleElf();
                }
                highElfStats();
                break;
            case "Drow":
                switch (myGender) {
                    case "Male":
                        maleElf();
                        break;
                    case "Female":
                        femaleElf();
                }
                drowStats();
                break;
            case "Wood Elf":
                switch (myGender) {
                    case "Male":
                        maleElf();
                        break;
                    case "Female":
                        femaleElf();
                }
                woodElfStats();
                break;
            case "Lightfoot Halfling":
                switch (myGender) {
                    case "Male":
                        maleElf();
                        break;
                    case "Female":
                        femaleElf();
                }
                lightfootHalflingStats();
                break;
            case "Stout Halfling":
                switch (myGender) {
                    case "Male":
                        maleHalfling();
                        break;
                    case "Female":
                        femaleHalfling();
                }
                stoutHalflingStats();
                break;
            case "Human":
                switch (myGender) {
                    case "Male":
                        maleHuman();
                    case "Female":
                        femaleHuman();
                }
                humanStats();
                break;
            case "Dragonborn":
            switch (myGender) {
                case "Male":
                    maleDragonborn();
                case "Female":
                    femaleDragonborn();
            }
                dragonbornStats();
                break;
            case "Gnome":
            switch (myGender) {
                case "Male":
                    maleGnome();
                case "Female":
                    femaleGnome();
            }
                gnomeStats();
                break;
            case "Half-Elf":
            switch (myGender) {
                case "Male":
                    maleHalfElf();
                case "Female":
                    femaleHalfElf();
            }
                halfElfStats();
                break;
            case "Half-Orc":
            switch (myGender) {
                case "Male":
                    maleHalfOrc();
                case "Female":
                    femaleHalfOrc();
            }
                halfOrcStats();
                break;
            case "Tiefling":
            switch (myGender) {
                case "Male":
                    maleTiefling();
                case "Female":
                    femaleTiefling();
            }
                tieflingStats();
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
