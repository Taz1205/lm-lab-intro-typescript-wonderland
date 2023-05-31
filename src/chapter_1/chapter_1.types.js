"use strict";
exports.__esModule = true;
exports.HOLES = void 0;
exports.HOLES = ['Badger', 'Fox', 'Swiss Cheese', 'Donut', 'Rabbit'];
// 💡 This is because of the `as const` declaration above - that says that the *contents*
//     of the HOLES array are not allowed to change, so TypeScript can safely create a type
//     based on the contents of HOLES
