import React from 'react';
export interface Props {
    /** The current page index being shown.  */
    currentPage: number;
    /** Number of total pages.  */
    numberOfPages: number;
    /** Callback function for fetching the selected page  */
    onNavigate: (toPage: number) => void;
    /** When set to true and the pagination result is only one page it will not render the pagination at all */
    hideWhenSinglePage?: boolean;
}
export declare const Pagination: React.FC<Props>;
