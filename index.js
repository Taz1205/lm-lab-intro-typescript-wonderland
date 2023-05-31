"use strict";
exports.__esModule = true;
exports.endAdventure = exports.haveAdventures = void 0;
var chapter_1_rabbit_hole_1 = require("./src/chapter_1/chapter_1_rabbit_hole");
var console_1 = require("./src/ui/console");
function haveAdventures() {
    (0, console_1.clear)(false);
    (0, console_1.print)('--------------------------');
    (0, console_1.print)('| Welcome to Wonderland! |');
    (0, console_1.print)('--------------------------');
    (0, console_1.askQuestion)("What's your name? ", startAdventure);
}
exports.haveAdventures = haveAdventures;
function startAdventure(name) {
    if (name && name.length > 0) {
        if (checkEntryCodeIsBiggerThanThree(numberBiggerThanThree)) {
            return (0, chapter_1_rabbit_hole_1.enterTheRabbitHole)(name);
        }
        else {
            (0, console_1.print)('***************************************');
            (0, console_1.print)("Hi ".concat(name, ". Sadly, the entry code failed! \u2639"));
            return endAdventure();
        }
    }
    else {
        (0, console_1.print)("I don't know who you are!");
        return endAdventure();
    }
}
function failImmediately() {
    (0, console_1.clear)(false);
    return endAdventure();
}
var numberBiggerThanThree = 11;
function checkEntryCodeIsBiggerThanThree(code) {
    return code > 3;
}
function endAdventure() {
    (0, console_1.print)('***************************************');
    (0, console_1.print)('You did not make it through Wonderland. 😭');
    (0, console_1.askQuestion)('Press ENTER to restart! ', haveAdventures);
}
exports.endAdventure = endAdventure;
haveAdventures();
