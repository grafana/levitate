/**
 * Returns string safe from XSS attacks.
 *
 * Even though we allow the style-attribute, there's still default filtering applied to it
 * Info: https://github.com/leizongmin/js-xss#customize-css-filter
 * Whitelist: https://github.com/leizongmin/js-css-filter/blob/master/lib/default.js
 */
export declare function sanitize(unsanitizedString: string): string;
export declare function sanitizeUrl(url: string): string;
export declare function hasAnsiCodes(input: string): boolean;
export declare function escapeHtml(str: string): string;
