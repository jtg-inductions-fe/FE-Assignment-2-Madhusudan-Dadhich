import type {
    CSSProperties,
    MixinsOptions,
} from '@mui/material/styles/createMixins';

type Alignment =
    | 'center'
    | 'start'
    | 'end'
    | 'space-between'
    | 'space-evenly'
    | 'space-around';

/**
 * Creates a CSS block for clamping text to a specified number of lines
 * @param lines - Number of Lines to clamp
 * @returns Returns Line clamp CSS properties
 */
const lineClamp = (lines: number = 1): CSSProperties => ({
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: lines,
});

/**
 * Creates a flex box for styling content in row or column to a specified styles
 * @param justifyContent - Alignment to set justify-content property of flex
 * @param alignItems - Alignment to set align-items property of flex
 * @param gap - Spacing to set gap property of flex
 * @param direction - Direction to set flex-direction property of flex
 * @param wrap - wrap to set flex-wrap property of flex
 * @returns Returns Flex CSS properties
 */
const flexWrapper = (
    justifyContent: Alignment = 'start',
    alignItems: Alignment = 'start',
    gap: number = 0,
    direction: 'row' | 'column' = 'row',
    wrap: 'wrap' | 'nowrap' = 'nowrap',
): CSSProperties => ({
    display: 'flex',
    justifyContent: justifyContent,
    alignItems: alignItems,
    gap: gap,
    flexDirection: direction,
    flexWrap: wrap,
});

export const mixins: MixinsOptions = {
    lineClamp,
    flexWrapper,
};
