import { FieldConfigEditorBuilder, FieldOverrideEditorProps } from '@grafana/data';
import React from 'react';
import { StackingConfig } from '@grafana/schema';
export declare const StackingEditor: React.FC<FieldOverrideEditorProps<StackingConfig, any>>;
export declare function addStackingConfig(builder: FieldConfigEditorBuilder<{
    stacking: StackingConfig;
}>, defaultConfig?: StackingConfig, category?: string[]): void;
