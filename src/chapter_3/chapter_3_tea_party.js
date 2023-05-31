"use strict";
exports.__esModule = true;
exports.attendATeaParty = void 0;
var __1 = require("../..");
var chapter_4_croquet_1 = require("../chapter_4/chapter_4_croquet");
var console_1 = require("../ui/console");
var DRINKS = ['Coffee', 'Tea', 'Water', 'Lemonade'];
function setTheTable() {
    var table = { seats: [] };
    for (var i = 0; i < 4; i++) {
        table.seats.push({
            drink: {
                type: 'Tea',
                poured: true
            }
        });
    }
    return table;
}
function attendATeaParty() {
    (0, console_1.clear)(true);
    (0, console_1.print)('The Mad Hatter 🎩 welcomes you to his tea party ☕ ');
    (0, console_1.print)("He and the March Hare set the table...");
    var drinks = setTheTable();
    if (!drinks || !drinks.seats || drinks.seats.length <= 0) {
        (0, console_1.print)("... but something went very wrong with the table. \uD83D\uDE31");
        return (0, __1.endAdventure)();
    }
    (0, console_1.print)("... they set ".concat(drinks.seats.length, " place(s) for their guests."));
    if (drinks.seats.length < 3) {
        (0, console_1.print)("\uD83D\uDE31 That's not enough seats! The party is cancelled...");
        return (0, __1.endAdventure)();
    }
    var properlySet = true;
    drinks.seats.forEach(function (seat) {
        if (!seat.drink.poured || seat.drink.type !== 'Tea') {
            properlySet = false;
        }
    });
    if (!properlySet) {
        (0, console_1.print)("\uD83D\uDE31 Uhoh! This isn't a proper tea party! Every seat must have a fully poured cup of tea.");
        return (0, __1.endAdventure)();
    }
    (0, console_1.print)("\uD83E\uDD73 Every seat had a lovely cup of tea, and a great time was had by all. \uD83E\uDD73 ");
    (0, console_1.print)("\uD83C\uDFD1 Time for a nice game of croquet! \uD83C\uDFD1");
    return (0, console_1.askQuestion)('Press ENTER to continue! ', chapter_4_croquet_1.playCroquet);
}
exports.attendATeaParty = attendATeaParty;
