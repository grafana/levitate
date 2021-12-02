"use strict";
exports.__esModule = true;
exports.getDiff = void 0;
var diff = require("diff");
var colors = require("colors/safe");
function getDiffLegend() {
    return ("\n" +
        colors.bgGreen("+ Added") +
        " " +
        colors.bgRed("- Removed") +
        "\n" +
        "\n");
}
function getDiff(prev, current) {
    var patch = diff.createPatch("string", prev, current);
    var lines = patch
        .split("\n")
        .slice(4)
        .map(getDiffForLine)
        .filter(function (line) { return line !== null; });
    return getDiffLegend() + lines.join("\n") + "\n";
}
exports.getDiff = getDiff;
function getDiffForLine(line) {
    switch (line[0]) {
        // Added lines
        case "+":
            return colors.bgGreen(line);
        // Removed lines
        case "-":
            return colors.bgRed(line);
        case " ":
            return line;
        case "@":
            return null;
        case "\\":
            return null;
    }
}
