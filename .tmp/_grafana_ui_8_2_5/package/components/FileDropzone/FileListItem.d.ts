/// <reference types="react" />
import { DropzoneFile } from './FileDropzone';
export declare const REMOVE_FILE = "Remove file";
export interface FileListItemProps {
    file: DropzoneFile;
    removeFile?: (file: DropzoneFile) => void;
}
export declare function FileListItem({ file: customFile, removeFile }: FileListItemProps): JSX.Element;
