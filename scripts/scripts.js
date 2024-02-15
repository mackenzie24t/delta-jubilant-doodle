$(function() 
{
    console.log("doc is ready");

    $("#btnGetFacts").click(function()
    {
        // get value of input
        let name = $("#userName").val();
        // call my function
        getCoolNameFacts(name);

        // print back result
        $("#userGreeting").text("Hi there, " + name + "! Nice to meet you!");
    })
});

function getCoolNameFacts(name)
{
    let letter = name.charAt(0).toUpperCase();
    $("#firstLetter").text("Your name starts with the letter " + letter + "!");
    
    let animal;
    if (letter == 'A') {
        animal = "Avocet";
      }
    if (letter == 'B') {
        animal = "Babirusa";
    }
    if (letter == 'C') {
        animal = "Cassowary";
    }
    if (letter == 'D') {
        animal = "Danio";
    }
    if (letter == 'E') {
        animal = "Edible Frog";
    }
    if (letter == 'F') {
        animal = "Fossa";
    }
    if (letter == 'G') {
        animal = "Gibbon";
    }
    if (letter == 'H') {
        animal = "Hartebeest";
    }
    if (letter == 'I') {
        animal = "Immortal Jellyfish";
    }
    if (letter == 'J') {
        animal = "Jerboa";
    }
    if (letter == 'K') {
        animal = "Kissing Gourami";
    }
    if (letter == 'L') {
        animal = "Lamprey";
    }
    if (letter == 'M') {
        animal = "Mackenzie Valley Wolf";
    }
    if (letter == 'N') {
        animal = "Nautilus";
    }
    if (letter == 'O') {
        animal = "Ovenbird";
    }
    if (letter == 'P') {
        animal = "Pangolin";
    }
    if (letter == 'Q') {
        animal = "Quahog Clam";
    }
    if (letter == 'R') {
        animal = "Rasbora";
    }
    if (letter == 'S') {
        animal = "Saiga";
    }
    if (letter == 'T') {
        animal = "Tarsier";
    }
    if (letter == 'U') {
        animal = "Uakari";
    }
    if (letter == 'V') {
        animal = "Vaquita";
    }
    if (letter == 'W') {
        animal = "Woma Python";
    }
    if (letter == 'X') {
        animal = "Xerus";
    }
    if (letter == 'Y') {
        animal = "Yarara";
    }
    if (letter == 'Z') {
        animal = "Zokor";
    }
    $("#coolAnimal").text("Here is an animal that who's name starts with " + letter + ": " + animal);
    
};
