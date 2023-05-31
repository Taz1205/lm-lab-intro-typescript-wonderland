"use strict";
exports.__esModule = true;
exports.enterHole = exports.enterTheRabbitHole = void 0;
var __1 = require("../..");
var chapter_2_cheshire_cat_1 = require("../chapter_2/chapter_2_cheshire_cat");
var console_1 = require("../ui/console");
var parse_input_1 = require("../ui/parse_input");
var chapter_1_types_1 = require("./chapter_1.types");
function enterTheRabbitHole(name) {
    (0, console_1.clear)(false);
    (0, console_1.print)("------------------------");
    (0, console_1.print)("\uD83E\uDD73 Welcome ".concat(name, "! \uD83E\uDD73"));
    (0, console_1.print)("------------------------");
    (0, console_1.print)("You can see a number of holes: ");
    chapter_1_types_1.HOLES.forEach(function (h, i) { return (0, console_1.print)("   ".concat(i, " - ").concat(h)); });
    (0, console_1.askQuestion)("Which number hole will you choose?", chooseHole);
}
exports.enterTheRabbitHole = enterTheRabbitHole;
function chooseHole(input) {
    // first we have to check our user input is valid
    // We might end up with a valid Hole, or we might end up with `undefined` if the input is invalid
    var hole = (0, parse_input_1.parseHoleInput)(input);
    // 💡 Hover the `hole` variable here and notice how the inferred type DOES include undefined
    if (hole === undefined) {
        (0, console_1.print)("\uD83D\uDE2E");
        (0, console_1.print)("".concat(input, " is an invalid input \uD83D\uDE2D"));
        return (0, __1.endAdventure)();
    }
    // the input is valid!
    // 💡 Hover the `hole` variable here and notice how the inferred type
    //    DOESN'T include undefined anymore - thanks to the `if` check above!
    // this allows us to pass it into the `enterHole` function which REQUIRES a valid Hole
    return enterHole(hole);
}
function enterHole(hole) {
    (0, console_1.clear)(true);
    if (hole === "Rabbit") {
        return (0, chapter_2_cheshire_cat_1.meetTheCheshireCat)();
    }
    else {
        (0, console_1.print)("WHAAAAT \u2753\uD83E\uDD2F\uD83D\uDE05\u2753");
        (0, console_1.print)("You can't find adventures there!");
        return (0, __1.endAdventure)();
    }
}
exports.enterHole = enterHole;
