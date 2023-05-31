"use strict";
exports.__esModule = true;
exports.playCroquet = void 0;
var __1 = require("../..");
var chapter_5_queen_of_hearts_1 = require("../chapter_5/chapter_5_queen_of_hearts");
var console_1 = require("../ui/console");
function playCroquet() {
    (0, console_1.clear)(true);
    (0, console_1.print)('The Queen of Hearts 👑❤ invites you to play croquet 🏑');
    var game = {
        hit: function (ball, mallet) {
            var score = 0;
            // 💡 Remember TypeScript only exists at compile time, so when this code *runs* the type we want (Ball)
            // should appear to be a string with value 'Hedgehog'.
            // ⚠️ Unlike strongly typed languages, there's no such thing as `typeof Ball` in JavaScript.
            if (typeof ball === 'string') {
                if (ball === 'Hedgehog')
                    score += 50;
            }
            // 💡 Remember TypeScript only exists at compile time, so when this code *runs* the type we want (Mallet)
            // should appear to be a string with value 'Flamingo'
            // ⚠️ Unlike strongly typed languages, there's no such thing as `typeof Mallet` in JavaScript.
            if (typeof mallet === 'string') {
                if (mallet === 'Flamingo')
                    score += 50;
            }
            return score === 100;
        }
    };
    if (game && game.hit && game.hit("Hedgehog", "Flamingo")) {
        (0, console_1.print)('🏆 Success! You scored! 🏆');
        (0, console_1.print)('Time to chat with the queen...');
        return (0, console_1.askQuestion)('Press ENTER to continue! ', chapter_5_queen_of_hearts_1.meetTheQueen);
    }
    else {
        (0, console_1.print)('😭 Sadly, you lost. And now the queen wants to decapitate you! 😱');
        return (0, __1.endAdventure)();
    }
}
exports.playCroquet = playCroquet;
