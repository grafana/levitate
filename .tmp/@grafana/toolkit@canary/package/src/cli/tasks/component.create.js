"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentCreateTask = exports.generateComponents = exports.promptDetails = void 0;
var tslib_1 = require("tslib");
var task_1 = require("./task");
var fs_1 = (0, tslib_1.__importDefault)(require("fs"));
var lodash_1 = require("lodash");
var inquirer_1 = require("inquirer");
var pascalCase_1 = require("../utils/pascalCase");
var prompt_1 = require("../utils/prompt");
var templates_1 = require("../templates");
var componentGroups = [
    { name: 'General', value: 'General' },
    { name: 'Forms', value: 'Forms' },
    { name: 'Panel', value: 'Panel' },
    { name: 'Visualizations', value: 'Visualizations' },
    { name: 'Others', value: 'Others' },
];
var promptDetails = function () {
    return (0, inquirer_1.prompt)([
        (0, prompt_1.promptInput)('name', 'Component name', true),
        (0, prompt_1.promptConfirm)('hasTests', "Generate component's test file?"),
        (0, prompt_1.promptConfirm)('hasStory', "Generate component's story file?"),
        (0, prompt_1.promptConfirm)('isStoryPublic', 'Generate public story? (Selecting "No" will create an internal story)', true, function (_a) {
            var hasStory = _a.hasStory;
            return hasStory;
        }),
        (0, prompt_1.promptList)('group', 'Select component group for the story (e.g. Forms, Layout)', function () { return componentGroups; }, 0, function (_a) {
            var hasStory = _a.hasStory;
            return hasStory;
        }),
    ]);
};
exports.promptDetails = promptDetails;
var generateComponents = function (_a) {
    var details = _a.details, path = _a.path;
    return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var name, getCompiled, filePath, paths, storyExt;
        return (0, tslib_1.__generator)(this, function (_b) {
            name = (0, pascalCase_1.pascalCase)(details.name);
            getCompiled = function (template) {
                return (0, lodash_1.template)(template)((0, tslib_1.__assign)((0, tslib_1.__assign)({}, details), { name: name }));
            };
            filePath = path + "/" + name;
            paths = [];
            fs_1.default.writeFileSync(filePath + ".tsx", getCompiled(templates_1.componentTpl));
            paths.push(filePath + ".tsx");
            if (details.hasTests) {
                fs_1.default.writeFileSync(filePath + ".test.tsx", getCompiled(templates_1.testTpl));
                paths.push(filePath + ".test.tsx");
            }
            if (details.hasStory) {
                storyExt = details.isStoryPublic ? '.story.tsx' : '.story.internal.tsx';
                fs_1.default.writeFileSync("" + filePath + storyExt, getCompiled(templates_1.storyTpl));
                fs_1.default.writeFileSync(filePath + ".mdx", getCompiled(templates_1.docsTpl));
                paths.push("" + filePath + storyExt, filePath + ".mdx");
            }
            console.log('Generated files:');
            console.log(paths.join('\n'));
            return [2 /*return*/];
        });
    });
};
exports.generateComponents = generateComponents;
var componentCreateRunner = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var destPath, details;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0:
                destPath = process.cwd();
                return [4 /*yield*/, (0, exports.promptDetails)()];
            case 1:
                details = _a.sent();
                return [4 /*yield*/, (0, exports.generateComponents)({ details: details, path: destPath })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.componentCreateTask = new task_1.Task('component:create', componentCreateRunner);
//# sourceMappingURL=component.create.js.map