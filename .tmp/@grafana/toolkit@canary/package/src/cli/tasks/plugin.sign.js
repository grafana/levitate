"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginSignTask = void 0;
var tslib_1 = require("tslib");
var path_1 = (0, tslib_1.__importDefault)(require("path"));
var manifest_1 = require("../../plugins/manifest");
var task_1 = require("./task");
var pluginSignRunner = function (_a) {
    var signatureType = _a.signatureType, rootUrls = _a.rootUrls;
    return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var distContentDir, manifest, signedManifest, err_1;
        return (0, tslib_1.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    distContentDir = path_1.default.resolve('dist');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    console.log('Building manifest...');
                    return [4 /*yield*/, (0, manifest_1.buildManifest)(distContentDir)];
                case 2:
                    manifest = _b.sent();
                    // console.log(manifest);
                    console.log('Signing manifest...');
                    if (signatureType) {
                        manifest.signatureType = signatureType;
                    }
                    if (rootUrls) {
                        manifest.rootUrls = rootUrls;
                    }
                    return [4 /*yield*/, (0, manifest_1.signManifest)(manifest)];
                case 3:
                    signedManifest = _b.sent();
                    // console.log(signedManifest);
                    console.log('Saving signed manifest...');
                    return [4 /*yield*/, (0, manifest_1.saveManifest)(distContentDir, signedManifest)];
                case 4:
                    _b.sent();
                    console.log('Signed successfully');
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _b.sent();
                    console.warn(err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
};
exports.pluginSignTask = new task_1.Task('plugin:sign task', pluginSignRunner);
//# sourceMappingURL=plugin.sign.js.map