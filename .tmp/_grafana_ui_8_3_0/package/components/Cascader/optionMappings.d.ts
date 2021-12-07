import { CascaderValueType, CascaderOption as RCCascaderOption } from 'rc-cascader/lib/Cascader';
import { CascaderOption } from './Cascader';
declare type onChangeType = ((values: string[], options: CascaderOption[]) => void) | undefined;
export declare const onChangeCascader: (onChanged: onChangeType) => (values: CascaderValueType, options: RCCascaderOption[]) => void;
declare type onLoadDataType = ((options: CascaderOption[]) => void) | undefined;
export declare const onLoadDataCascader: (onLoadData: onLoadDataType) => (options: RCCascaderOption[]) => void;
export {};
