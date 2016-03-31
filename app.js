$(function(){

var nameList = ['Max', 'Lisa', 'Suzanna', 'Kyle', 'Chris T.', 'Chris R.', 'Jennifer',
'Jessica', 'Sasha', 'Oliver', 'Erika', 'Amy', 'Russ', 'Taylor', 'Travis', 'Peter',
'Cari', 'Libby','Courtney'];

var numTeams = 0;
var nameLength = nameList.length;

function clearTeams(){
  $("#teamListings").empty();
}

$('#buttonHolder').children().on('click', function() {
  switch($(this).attr("id")){
    case 'two':
      numTeams = 2;
      break;
    case 'three':
      numTeams = 3;
      break;
    case 'four':
      numTeams = 4;
      break;
    case 'five':
      numTeams = 5;
      break;
    case 'six':
      numTeams = 6;
      break;
    case 'seven':
      numTeams = 7;
      break;
    case 'eight':
      numTeams= 8;
      break;
    case 'nine':
      numTeams = 9;
      break;
    case 'ten':
      numTeams = 10;
      break;
    case 'eleven':
      numTeams = 11;
      break;
  }
})

$('#generateButton').on('click', function() {
  if(numTeams === 0){
    return alert("Select a number, dolt!");
  }

  clearTeams();
  shuffle(nameList);
  // Create a div for each team
  makeDivs();

  // append names to tha div
  addNames();

});

$('#empty').on('click', function() {
  $("#teamListings").empty();
});


function addNames() {
  var count = 0;
  while(count < nameList.length - 1) {
   for(var i = 0; i < numTeams; i++) {
    var appendDiv = "<p>" + nameList[count] + "</p>";
    var currentId = "#" + (i+1).toString();
    $(currentId).append(appendDiv);
    count++;

    if(count === nameList.length) {
      break;
    }
  };
 };
}


function makeDivs() {

  var divHTMLpt1 = '<div class = \'group\' id = \'';
  var divHTMLpt2 = '\'></div>'; // add vars
  var randomNames = randomTeamName(numTeams);
  for (var i = 0; i < numTeams; i++) {
    var teamName = '<h2>' + (i + 1) + '. ' + randomNames[i] + '</h2>';

   $('#teamListings').append(divHTMLpt1 + (i + 1) + divHTMLpt2);
   $('#teamListings').children().last().append(teamName)
 };
}

//The Fisher-Yates shuffle
function shuffle(array) {

  var tempArr = array;
  var m = tempArr.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = tempArr[m];
    tempArr[m] = tempArr[i];
    tempArr[i] = t;
  }

  return tempArr;
}

var adjectives = ['Pistachio', 'Sparkly', 'Banana', 'Nerdy', 'Rainbow',
'Hungry, Hungry', 'Invisible', 'Magnificent', 'Fancy', 'Lunar', 'Cantankerous',
'Geodesic', 'Big-Nosed', 'Spaghetti', 'Ursine', 'Spanky', 'Murderous', 'Code',
'Rambunctious', 'Urgent', 'Instant', 'Anonymous', 'Static', 'Tiny', 'Massive',
'Cro-Magnon', 'Vegan', 'Hipster', 'Fighting', 'Quizzical', 'Tumbling', 'Tetra',
'The Chosen', 'Souped-Up', 'Non-Canonical', 'Mellifluous', 'Hulking', 'Stinky', 'Grape-Flavored',
'Egregious', 'Bovine', 'Real', 'Fake', 'Faux', 'East-Side'];
var nouns = ['Sandwiches', 'Nerds', 'Monkeys', 'Cowboys', 'Ninjas', 'Pants',
'Octothorpes', 'Unicorns', 'Hamsters',
'Bunnies', 'Glow Worms', 'Domes', 'Rhombi',
'Octopi', 'Punk', 'Prime Ministers', 'Crypto-Zoologists', 'Robots',
'Pi', 'Hipster', 'Pizza', 'Queries', 'Arrays', 'Soup', 'Tumbleweeds', 'Smarty-Pants', 'Bros'];

function randomTeamName(num) {
 shuffle(adjectives);
 shuffle(nouns);
 var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("Team " + adjectives[i] + " " + nouns[i]);
  }
  return arr;
}

});
