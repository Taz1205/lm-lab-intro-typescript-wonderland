"use strict";
exports.__esModule = true;
exports.goHome = void 0;
var __1 = require("../..");
var console_1 = require("../ui/console");
function goHome() {
    var _a;
    (0, console_1.clear)(true);
    (0, console_1.print)('Wait... do I want to go home?');
    var decisionTime = tryToGoHome();
    // optional parameters can be accessed safely with the ?. operator
    // this will only return if every parameter in the whole chain is properly set...
    if (((_a = decisionTime.gohome) === null || _a === void 0 ? void 0 : _a.wantToGoHome) === 'Yes') {
        (0, console_1.print)('CONGRATULATIONS! You successfully made it home to your Mum! 🥳');
        return (0, console_1.askQuestion)('Press ENTER to re-enter Wonderland! ', __1.haveAdventures);
    }
    else {
        (0, console_1.print)('You are unable to make a decision! 😱');
        return (0, __1.endAdventure)();
    }
}
exports.goHome = goHome;
function tryToGoHome() {
    return {
        gohome: {
            wantToGoHome: 'Yes'
        }
    };
}
