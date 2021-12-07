/**
 * Returns tag badge background and border colors based on hashed tag name.
 * @param name tag name
 */
export declare function getTagColorsFromName(name?: string): {
    color: string;
    borderColor: string;
};
export declare function getTagColor(index: number): {
    color: string;
    borderColor: string;
};
declare const _default: {
    getTagColorsFromName: typeof getTagColorsFromName;
};
export default _default;
