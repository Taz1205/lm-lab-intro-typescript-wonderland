"use strict";
exports.__esModule = true;
exports.meetTheQueen = void 0;
var __1 = require("../..");
var chapter_6_wake_up_1 = require("../chapter_6/chapter_6_wake_up");
var console_1 = require("../ui/console");
var VERDICTS = ['Guilty', 'Not Guilty'];
function meetTheQueen() {
    (0, console_1.clear)(true);
    (0, console_1.print)('The Queen has put you on trial for stealing tarts.');
    var guilty = false;
    var witnesses = getWitnesses(['The Mad Hatter', 'The March Hare', 'The White Rabbit', 'The Cheshire Cat']);
    if (!witnesses || witnesses.length === 0) {
        (0, console_1.print)("No witnesses have come forward to defend you.");
        guilty = true;
    }
    var witnessCount = 0;
    witnesses.forEach(function (witness) {
        witnessCount++;
        (0, console_1.print)("".concat(witness.name, " gives their evidence: ").concat(witness.giveEvidence()));
        if (witness.giveEvidence() === 'Guilty') {
            guilty = true;
        }
    });
    if (witnessCount < 4 || guilty) {
        (0, console_1.print)("You have been found guilty! \"Off with her head!\" \uD83D\uDE31");
        return (0, __1.endAdventure)();
    }
    else {
        (0, console_1.print)("You have been found NOT GUILTY! Thank goodness. \uD83E\uDD73");
        (0, console_1.print)('Time to wake up...');
        return (0, console_1.askQuestion)('Press ENTER to continue! ', chapter_6_wake_up_1.wakeUp);
    }
}
exports.meetTheQueen = meetTheQueen;
function getWitnesses(witnessNames) {
    return witnessNames.map(function (n) { return { name: n, giveEvidence: function () { return 'Not Guilty'; } }; });
}
