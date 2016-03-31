$(function(){

var nameList = ['Max', 'Lisa', 'Suzanna', 'Kyle', 'Chris T.', 'Chris R.', 'Jennifer',
'Jessica', 'Sasha', 'Oliver', 'Erika', 'Amy', 'Russ', 'Taylor', 'Travis', 'Peter',
'Cari', 'Libby','Courtney'];

var numTeams = 0;
var shuffledNames = [];
var nameLength = nameList.length;

function clearTeams() {
  $('#teamListings').empty();
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
  console.log(nameList);
  //TODO: fix clear function 
  shuffledNames = shuffle(nameList);
  // Create a div for each team
  makeDivs();

  // append names to tha div
  addNames();

});



function addNames() {
  while(shuffledNames.length > 0) {
   for(var i = 0; i < numTeams; i++) {
    var currentName = shuffledNames.pop();
    var appendDiv = "<p>" + currentName + "</p>";
    var currentId = "#" + (i+1).toString();
    $(currentId).append(appendDiv);

    if(!shuffledNames.length) {
      break;
    }
    console.log(currentName, currentId);
  };
 };
}


function makeDivs() {

  var divHTMLpt1 = '<div class = \'group\' id = \'';
  var divHTMLpt2 = '\'></div>'; // add vars

  for (var i = 0; i < numTeams; i++) {
    var teamName = '<h2>Team ' + (i + 1) + '</h2>';

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



















});
