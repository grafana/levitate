"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testTpl = void 0;
exports.testTpl = "\nimport React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport { <%= name %> } from './<%= name %>';\n\n\ndescribe('<%= name %>', () => {\n  it.skip('should render', () => {\n\n  });\n});\n";
//# sourceMappingURL=component.test.tsx.template.js.map