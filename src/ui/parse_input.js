"use strict";
exports.__esModule = true;
exports.parseHoleInput = void 0;
var chapter_1_types_1 = require("../chapter_1/chapter_1.types");
// 💡 This `parseHoleInput` function exists to keep user input (which can be anything)
//    away from our logic, which we want to keep clean using our nice neat types like `Hole`
//    This function translates all possible user inputs into either:
//           a Hole    👈 if the input is valid
//			 undefined 👈 if the input is invalid
function parseHoleInput(input) {
    //  It might seem like we know this is a number,
    //  but of course the user can enter any nonsense to the prompt!
    var chosenHole = parseInt(input);
    // now we verify it's valid
    if (isNaN(chosenHole)) {
        return undefined;
    }
    if (chosenHole < 0 || chosenHole > chapter_1_types_1.HOLES.length - 1) {
        return undefined;
    }
    // we know the input is valid so we can return a Hole
    return chapter_1_types_1.HOLES[chosenHole];
}
exports.parseHoleInput = parseHoleInput;
