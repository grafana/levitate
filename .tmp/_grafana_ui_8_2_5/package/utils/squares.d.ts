/**
 * This function will calculate how many squares we can fit inside a rectangle.
 * Please have a look at this post for more details about the implementation:
 * https://math.stackexchange.com/questions/466198/algorithm-to-get-the-maximum-size-of-n-squares-that-fit-into-a-rectangle-with-a
 *
 * @param parentWidth width of the parent container
 * @param parentHeight height of the parent container
 * @param numberOfChildren number of children that should fit in the parent container
 */
export declare const calculateGridDimensions: (parentWidth: number, parentHeight: number, itemSpacing: number, numberOfChildren: number) => {
    width: number;
    height: number;
    widthOnLastRow: number;
    xCount: number;
    yCount: number;
};
