import { ReactNode } from 'react';
import { DropzoneOptions } from 'react-dropzone';
export interface FileDropzoneProps {
    /**
     * Use the children property to have custom dropzone view.
     */
    children?: ReactNode;
    /**
     * Use this property to override the default behaviour for the react-dropzone options.
     * @default {
     *  maxSize: Infinity,
     *  minSize: 0,
     *  multiple: true,
     *  maxFiles: 0,
     * }
     */
    options?: DropzoneOptions;
    /**
     * Use this to change the FileReader's read.
     */
    readAs?: 'readAsArrayBuffer' | 'readAsText' | 'readAsBinaryString' | 'readAsDataURL';
    /**
     * Use the onLoad function to get the result from FileReader.
     */
    onLoad?: (result: string | ArrayBuffer | null) => void;
    /**
     * The fileListRenderer property can be used to overwrite the list of files. To not to show
     * any list return null in the function.
     */
    fileListRenderer?: (file: DropzoneFile, removeFile: (file: DropzoneFile) => void) => ReactNode;
}
export interface DropzoneFile {
    file: File;
    id: string;
    error: DOMException | null;
    progress?: number;
    abortUpload?: () => void;
    retryUpload?: () => void;
}
export declare function FileDropzone({ options, children, readAs, onLoad, fileListRenderer }: FileDropzoneProps): JSX.Element;
export declare function FileDropzoneDefaultChildren({ primaryText, secondaryText, }: {
    primaryText?: string | undefined;
    secondaryText?: string | undefined;
}): JSX.Element;
