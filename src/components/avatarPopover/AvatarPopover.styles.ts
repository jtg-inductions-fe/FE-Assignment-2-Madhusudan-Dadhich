import { Avatar, Popover, popoverClasses, styled } from '@mui/material';

export const PopoverWrapper = styled(Popover)(({ theme }) => ({
    [`& .${popoverClasses.paper}`]: {
        padding: `${theme.spacing(4)}`,
        ...theme.mixins.flexWrapper('center', 'center', 'row'),
        gap: theme.spacing(4),
    },
}));

export const PopoverAvatar = styled(Avatar)(({ theme: { spacing } }) => ({
    width: spacing(16),
    height: spacing(16),
}));
