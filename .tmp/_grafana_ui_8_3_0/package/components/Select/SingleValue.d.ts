import { SingleValueProps } from 'react-select';
interface Props extends SingleValueProps<{
    imgUrl?: string;
    label?: string;
    value: string;
    loading?: boolean;
    hideText?: boolean;
}> {
    disabled?: boolean;
}
export declare const SingleValue: (props: Props) => JSX.Element;
export {};
