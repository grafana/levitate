"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pascalCase = void 0;
var lodash_1 = require("lodash");
exports.pascalCase = (0, lodash_1.flow)([lodash_1.camelCase, lodash_1.upperFirst]);
//# sourceMappingURL=pascalCase.js.map