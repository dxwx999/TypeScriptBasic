var songs = ['南山南啊', '被球被'];
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
function changeDirection3(direction) {
    console.log(direction);
}
changeDirection3(Direction2.Down);
