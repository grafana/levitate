import { FieldConfigEditorBuilder, FieldOverrideEditorProps } from '@grafana/data';
import React from 'react';
import { GraphFieldConfig } from '../..';
import { StackingConfig } from '@grafana/schema';
export declare const StackingEditor: React.FC<FieldOverrideEditorProps<StackingConfig, any>>;
export declare function addStackingConfig(builder: FieldConfigEditorBuilder<GraphFieldConfig>, defaultConfig?: StackingConfig, category?: string[]): void;
