import { Field, LinkModel } from '@grafana/data';
import { ButtonProps } from '../Button';
declare type DataLinkButtonProps = {
    link: LinkModel<Field>;
    buttonProps?: ButtonProps;
};
/**
 * @internal
 */
export declare function DataLinkButton({ link, buttonProps }: DataLinkButtonProps): JSX.Element;
export {};
