import { ManifestInfo } from './types';
export declare function buildManifest(dir: string): Promise<ManifestInfo>;
export declare function signManifest(manifest: ManifestInfo): Promise<string>;
export declare function saveManifest(dir: string, signedManifest: string): Promise<boolean>;
