import { IconButton, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton)(
    ({ theme: { typography } }) => ({
        '& svg': {
            fontSize: typography.pxToRem(32),
        },
    }),
);
