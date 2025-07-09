import { Link } from 'react-router-dom';

import { AppBar, Box, styled, Toolbar, Tooltip } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: 'sticky',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
    zIndex: theme.zIndex.drawer + 1,

    [theme.breakpoints.up('smallDesktop')]: {
        paddingInline: theme.spacing(5),
    },
}));

export const StyledToolbar = styled(Toolbar)(() => ({
    justifyContent: 'space-between',
    alignContent: 'center',
}));

export const LeftNavbarWrapper = styled(Box)(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.up('smallDesktop')]: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(8),
    },
}));

export const SidebarIconWrapper = styled(Tooltip)(({ theme }) => ({
    display: 'block',

    [theme.breakpoints.up('smallDesktop')]: {
        display: 'none',
    },
}));

export const StyledLinkWrapper = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    maxHeight: 'max-content',
    borderRadius: '50%',
    textDecoration: 'none',
    color: theme.palette.text.primary,

    '&:hover': {
        boxShadow: theme.shadows[8],
    },
}));
