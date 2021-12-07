"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpinner = void 0;
var tslib_1 = require("tslib");
var ora_1 = (0, tslib_1.__importDefault)(require("ora"));
var useSpinner = function (label, fn, killProcess) {
    if (killProcess === void 0) { killProcess = true; }
    return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var spinner, err_1;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    spinner = (0, ora_1.default)(label);
                    spinner.start();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fn()];
                case 2:
                    _a.sent();
                    spinner.succeed();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    spinner.fail(err_1.message || err_1);
                    if (err_1.stdout) {
                        console.error(err_1.stdout);
                    }
                    else if (err_1.message) {
                        // Return stack trace if error object
                        console.trace(err_1); // eslint-disable-line no-console
                    }
                    if (killProcess) {
                        process.exit(1);
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.useSpinner = useSpinner;
//# sourceMappingURL=useSpinner.js.map