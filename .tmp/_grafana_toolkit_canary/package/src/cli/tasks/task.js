"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(name, runner) {
        var _this = this;
        this.name = name;
        this.runner = runner;
        this.options = {};
        this.setName = function (name) {
            _this.name = name;
        };
        this.setRunner = function (runner) {
            _this.runner = runner;
        };
        this.setOptions = function (options) {
            _this.options = options;
        };
        this.exec = function () {
            return _this.runner(_this.options);
        };
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map