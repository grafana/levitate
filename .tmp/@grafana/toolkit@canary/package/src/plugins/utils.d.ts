import { KeyValue } from '@grafana/data';
import { ExtensionSize, ZipFileInfo, GitLogInfo } from './types';
export declare function getGrafanaVersions(): KeyValue<string>;
export declare function getFileSizeReportInFolder(dir: string, info?: ExtensionSize): ExtensionSize;
export declare function getPackageDetails(zipFile: string, zipSrc: string, writeChecksum?: boolean): Promise<ZipFileInfo>;
export declare function findImagesInFolder(dir: string, prefix?: string, append?: string[]): string[];
export declare function readGitLog(): Promise<GitLogInfo | undefined>;
