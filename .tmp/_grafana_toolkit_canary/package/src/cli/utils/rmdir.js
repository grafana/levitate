"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rmdir = void 0;
var fs = require("fs");
var path = require("path");
/**
 * Remove directory recursively
 * Ref https://stackoverflow.com/a/42505874
 */
var rmdir = function (dirPath) {
    if (!fs.existsSync(dirPath)) {
        return;
    }
    fs.readdirSync(dirPath).forEach(function (entry) {
        var entryPath = path.join(dirPath, entry);
        if (fs.lstatSync(entryPath).isDirectory()) {
            (0, exports.rmdir)(entryPath);
        }
        else {
            fs.unlinkSync(entryPath);
        }
    });
    fs.rmdirSync(dirPath);
};
exports.rmdir = rmdir;
//# sourceMappingURL=rmdir.js.map