// very important go to sources --> then select snippets --> create file index.js --> then clikc ctrl + enter to run
// the goal of this exercise is to count the number of character the user has typed and let the user
// know how many character is remaining.

var character = promt("type something");
var character_count = character.length;
alert ("you have written" + character_count + "characters, you have" + (140 - character_count) + "character remaining" );
