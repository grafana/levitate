"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docsTpl = void 0;
exports.docsTpl = "import { ArgsTable } from '@storybook/addon-docs/blocks';\nimport { <%= name %> } from './<%= name %>';\n\n# <%= name %>\n\n### Usage\n\n```jsx\nimport { <%= name %> } from '@grafana/ui';\n\n<<%= name %> />\n```\n\n### Props\n<ArgsTable of={<%= name %>} />\n";
//# sourceMappingURL=docs.mdx.template.js.map