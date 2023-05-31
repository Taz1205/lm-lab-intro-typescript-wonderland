"use strict";
exports.__esModule = true;
exports.meetTheCheshireCat = void 0;
var __1 = require("../..");
var console_1 = require("../ui/console");
var chapter_3_tea_party_1 = require("../chapter_3/chapter_3_tea_party");
var EXPRESSIONS = [
    '☹ Frown ☹',
    '🙂 Smile 🙂',
    '😁 Grin 😁',
    '😶 Blank Face 😶',
    '😡 Angry Face 😡',
]; // 💡 CURIOUS - see activity_2.md for explanations
var CheshireCat = /** @class */ (function () {
    function CheshireCat() {
        this.name = 'The Cheshire Cat';
        this.expression = '☹ Frown ☹';
    }
    return CheshireCat;
}());
function meetTheCheshireCat() {
    (0, console_1.clear)(true);
    var theCat = new CheshireCat();
    theCat.expression = '😁 Grin 😁';
    (0, console_1.print)("You can see ".concat(theCat.name, ". A wide ").concat(theCat.expression, " is hovering in the air."));
    if (theCat.expression === '😁 Grin 😁') {
        (0, console_1.print)("\uD83E\uDD73 The cat allows you to continue onwards. There is the sound of a party in the distance... \uD83E\uDD73 ");
        return (0, console_1.askQuestion)('Press ENTER to continue! ', chapter_3_tea_party_1.attendATeaParty);
    }
    else {
        (0, console_1.print)("\uD83D\uDE31 The cat will not allow you to pass. \uD83D\uDE31 ");
        return (0, __1.endAdventure)();
    }
}
exports.meetTheCheshireCat = meetTheCheshireCat;
