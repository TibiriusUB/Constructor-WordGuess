function endDetect() {
    let test = false;
    for (t = 0; t < play.length; t++) {
        if (!(play[t].reveal)) {
            break
        } else {
            if ((t === play.length - 1) && (play[t].reveal)) {
                console.log("You Win!");
                test = true
            };
        };

    };
    if (test) { return test }

    if (plays == 0) {
        console.log("You Lose!")
        test = true
    };
    return test
};

var plays = 1
var play = [{ char: "a", reveal: true }, { char: "b", reveal: false }, { char: "c", reveal: true }, { char: "d", reveal: true }]

endDetect()