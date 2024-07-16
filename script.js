const scoring = new Map();
scoring.set('A',1);
scoring.set('E',1);
scoring.set('I',1);
scoring.set('O',1);
scoring.set('U',1);
scoring.set('L',1);
scoring.set('N',1);
scoring.set('S',1);
scoring.set('T',1);
scoring.set('R',1);

scoring.set('D',2);
scoring.set('G',2);

scoring.set('B',3);
scoring.set('C',3);
scoring.set('M',3);
scoring.set('P',3);

scoring.set('F',4);
scoring.set('H',4);
scoring.set('V',4);
scoring.set('W',4);
scoring.set('Y',4);

scoring.set('K',5);

scoring.set('J',8);
scoring.set('X',8);

scoring.set('Q',10);
scoring.set('Z',10);

scoring.set('_',0);

function score() {
var word = document.getElementById('word').value.toUpperCase();
var scheme = document.getElementById('scheme').value;


var word_list = word.split('');
var points = [];


for (let i = 0; i < word_list.length; i++) {
    if (scheme[i] === 'd') {
        points.push(2*scoring.get(word_list[i]));
    } else if (scheme[i] === 't') {
        points.push(3*scoring.get(word_list[i]));
    } else {
        points.push(scoring.get(word_list[i]));
    }
}



document.getElementById("output").innerHTML = Math.pow(2,num_D(scheme))*Math.pow(3,num_T(scheme))*sum(points);

document.getElementById("individual_points").innerHTML = points;


function sum(array) {
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        num += array[i];
    }
    return num;
}
}

function num_T(array) {
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'T') {
            num++;
        }
    }
    return num;
}

function num_D(array) {
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'D') {
            num++;
        }
    }
    return num;
}


var active_player = 0;
var name_1 = '';
var name_2 = '';
var name_3 = '';
var name_4 = '';
var scores = [];
var names = [];
var p = 0;
var turn = 0;
function game() {
    p = document.getElementById("players").value;
    
    for (let i = 0; i < p; i++) {
        scores.push(0);
    }

    for (let i = 0; i < p; i++) {
        scores[i] = parseInt(scores[i]);
    }
    
    for (let i = 0; i < p; i++) {
        var name = prompt("What is this player's name?");
        names.push(name);
    }
    var name_div = document.getElementById(active_player+"_name");
    name_div.style.borderColor = "#004aad"; 
}

function switch_player() {
    var name_div = document.getElementById(active_player+"_name");
    name_div.style.color = "black";
    active_player = (active_player+1) % p;
    var next_name_div = document.getElementById(active_player+"_name");
    next_name_div.style.color = "#004aad";
    document.getElementById("current_player").innerHTML = active_player;
}

function add_points() {
    scores[active_player] += parseInt((document.getElementById("output").innerHTML));
    alert("Points added to " + names[active_player]);
}

function update_score() {
    for (let i = 0; i < p; i++) {
        document.getElementById(i.toString()+"_name").innerHTML = names[i];
        document.getElementById(i.toString()+"_score").innerHTML = scores[i]; 
    }
}

function end_game() {
    alert("Congratulations, " + names[scores.indexOf(max(scores))] +  ". You have won the game with a total of " + max(scores) + " points!");
}



function max(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]>max) {
            max = array[i];
        }
    return max;
    }
}










