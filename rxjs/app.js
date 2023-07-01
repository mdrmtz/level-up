"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
(function () {
    console.log("Let's start");
    (0, rxjs_1.range)(1, 100)
        .pipe((0, rxjs_1.filter)(function (x) { return x % 2 === 1; }), (0, rxjs_1.map)(function (x) { return x + x; }))
        .subscribe(function (x) { return console.log(x); });
})();
