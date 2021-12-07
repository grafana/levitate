import { ChangeEvent, MouseEvent, FC } from 'react';
interface Props {
    label: string;
    hasCert: boolean;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
export declare const CertificationKey: FC<Props>;
export {};
