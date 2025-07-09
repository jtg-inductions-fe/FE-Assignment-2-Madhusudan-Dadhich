export declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        lineClamp: (lines: number) => CSSProperties;
        flexWrapper: (
            justifyContent: Alignment,
            alignItems: Alignment,
            direction: 'row' | 'column',
        ) => CSSProperties;
    }
}

export declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        tablet: true;
        smallDesktop: true;
        desktop: true;
        largeDesktop: true;
    }
}
