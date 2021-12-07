"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveManifest = exports.signManifest = exports.buildManifest = void 0;
var tslib_1 = require("tslib");
var path_1 = (0, tslib_1.__importDefault)(require("path"));
var fs_1 = (0, tslib_1.__importDefault)(require("fs"));
var crypto_1 = (0, tslib_1.__importDefault)(require("crypto"));
var MANIFEST_FILE = 'MANIFEST.txt';
function walk(dir, baseDir) {
    return (0, tslib_1.__asyncGenerator)(this, arguments, function walk_1() {
        var _a, _b, d, entry, realPath, stats, e_1_1;
        var e_1, _c;
        return (0, tslib_1.__generator)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 17, 18, 23]);
                    return [4 /*yield*/, (0, tslib_1.__await)(fs_1.default.promises.opendir(dir))];
                case 1:
                    _a = tslib_1.__asyncValues.apply(void 0, [_d.sent()]);
                    _d.label = 2;
                case 2: return [4 /*yield*/, (0, tslib_1.__await)(_a.next())];
                case 3:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 16];
                    d = _b.value;
                    entry = path_1.default.posix.join(dir, d.name);
                    if (!d.isDirectory()) return [3 /*break*/, 7];
                    return [4 /*yield*/, (0, tslib_1.__await)(walk(entry, baseDir))];
                case 4: return [5 /*yield**/, (0, tslib_1.__values)(tslib_1.__asyncDelegator.apply(void 0, [tslib_1.__asyncValues.apply(void 0, [_d.sent()])]))];
                case 5: return [4 /*yield*/, tslib_1.__await.apply(void 0, [_d.sent()])];
                case 6:
                    _d.sent();
                    return [3 /*break*/, 15];
                case 7:
                    if (!d.isFile()) return [3 /*break*/, 10];
                    return [4 /*yield*/, (0, tslib_1.__await)(path_1.default.posix.relative(baseDir, entry))];
                case 8: return [4 /*yield*/, _d.sent()];
                case 9:
                    _d.sent();
                    return [3 /*break*/, 15];
                case 10:
                    if (!d.isSymbolicLink()) return [3 /*break*/, 15];
                    return [4 /*yield*/, (0, tslib_1.__await)(fs_1.default.promises.realpath(entry))];
                case 11:
                    realPath = _d.sent();
                    if (!realPath.startsWith(baseDir)) {
                        throw new Error("symbolic link " + path_1.default.posix.relative(baseDir, entry) + " targets a file outside of the base directory: " + baseDir);
                    }
                    return [4 /*yield*/, (0, tslib_1.__await)(fs_1.default.promises.stat(realPath))];
                case 12:
                    stats = _d.sent();
                    if (!stats.isFile()) return [3 /*break*/, 15];
                    return [4 /*yield*/, (0, tslib_1.__await)(path_1.default.posix.relative(baseDir, entry))];
                case 13: return [4 /*yield*/, _d.sent()];
                case 14:
                    _d.sent();
                    _d.label = 15;
                case 15: return [3 /*break*/, 2];
                case 16: return [3 /*break*/, 23];
                case 17:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 23];
                case 18:
                    _d.trys.push([18, , 21, 22]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 20];
                    return [4 /*yield*/, (0, tslib_1.__await)(_c.call(_a))];
                case 19:
                    _d.sent();
                    _d.label = 20;
                case 20: return [3 /*break*/, 22];
                case 21:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 22: return [7 /*endfinally*/];
                case 23: return [2 /*return*/];
            }
        });
    });
}
function buildManifest(dir) {
    var e_2, _a;
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
        var pluginJson, manifest, _b, _c, p, e_2_1;
        return (0, tslib_1.__generator)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    pluginJson = JSON.parse(fs_1.default.readFileSync(path_1.default.join(dir, 'plugin.json'), { encoding: 'utf8' }));
                    manifest = {
                        plugin: pluginJson.id,
                        version: pluginJson.info.version,
                        files: {},
                    };
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 7, 8, 13]);
                    return [4 /*yield*/, walk(dir, dir)];
                case 2:
                    _b = tslib_1.__asyncValues.apply(void 0, [_d.sent()]);
                    _d.label = 3;
                case 3: return [4 /*yield*/, _b.next()];
                case 4:
                    if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 6];
                    p = _c.value;
                    if (p === MANIFEST_FILE) {
                        return [3 /*break*/, 5];
                    }
                    manifest.files[p] = crypto_1.default
                        .createHash('sha256')
                        .update(fs_1.default.readFileSync(path_1.default.join(dir, p)))
                        .digest('hex');
                    _d.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _d.trys.push([8, , 11, 12]);
                    if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _a.call(_b)];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [2 /*return*/, manifest];
            }
        });
    });
}
exports.buildManifest = buildManifest;
function signManifest(manifest) {
    var _a, _b;
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
        var GRAFANA_API_KEY, GRAFANA_COM_URL, url, axios, info, err_1;
        return (0, tslib_1.__generator)(this, function (_c) {
            switch (_c.label) {
                case 0:
                    GRAFANA_API_KEY = process.env.GRAFANA_API_KEY;
                    if (!GRAFANA_API_KEY) {
                        throw new Error('You must enter a GRAFANA_API_KEY to sign the plugin manifest');
                    }
                    GRAFANA_COM_URL = process.env.GRAFANA_COM_URL || 'https://grafana.com/api';
                    url = GRAFANA_COM_URL + '/plugins/ci/sign';
                    axios = require('axios');
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.post(url, manifest, {
                            headers: { Authorization: 'Bearer ' + GRAFANA_API_KEY },
                        })];
                case 2:
                    info = _c.sent();
                    if (info.status !== 200) {
                        console.warn('Error: ', info);
                        throw new Error('Error signing manifest');
                    }
                    return [2 /*return*/, info.data];
                case 3:
                    err_1 = _c.sent();
                    if ((_b = (_a = err_1.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) {
                        throw new Error('Error signing manifest: ' + err_1.response.data.message);
                    }
                    throw new Error('Error signing manifest: ' + err_1.message);
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.signManifest = signManifest;
function saveManifest(dir, signedManifest) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            fs_1.default.writeFileSync(path_1.default.join(dir, MANIFEST_FILE), signedManifest);
            return [2 /*return*/, true];
        });
    });
}
exports.saveManifest = saveManifest;
//# sourceMappingURL=manifest.js.map