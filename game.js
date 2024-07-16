var p = document.getElementById("p");
var scores = [];
for (let i = 0; i < p; i++) {
    scores.push(0);
}

function game() {
    var active_player = 0;
    
    function switch_player() {
        active_player = (active_player++) % 3;
    }

    function add_points(points) {
        scores[active_player] += points;
        console.log(scores);
    }
}