import { FC } from 'react';
import { UseFieldArrayProps } from 'react-hook-form';
import { FieldArrayApi } from '../../types';
export interface FieldArrayProps extends UseFieldArrayProps {
    children: (api: FieldArrayApi) => JSX.Element;
}
export declare const FieldArray: FC<FieldArrayProps>;
