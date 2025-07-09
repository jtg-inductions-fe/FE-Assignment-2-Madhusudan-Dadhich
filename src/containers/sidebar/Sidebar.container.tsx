import React from 'react';

import { useOutletContext } from 'react-router-dom';

import { Inbox, Mail } from '@mui/icons-material';
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material';

interface LayoutContext {
    sidebarOpen: boolean;
    onSidebarClosed: () => void;
}

export const Sidebar: React.FC = () => {
    const { sidebarOpen, onSidebarClosed } = useOutletContext<LayoutContext>();

    return (
        <>
            {sidebarOpen == true ? (
                <Drawer
                    keepMounted
                    open={sidebarOpen}
                    onClose={onSidebarClosed}
                >
                    <Toolbar sx={{ padding: '4rem' }} />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                                (text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? (
                                                    <Inbox />
                                                ) : (
                                                    <Mail />
                                                )}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ),
                            )}
                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map(
                                (text, index) => (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? (
                                                    <Inbox />
                                                ) : (
                                                    <Mail />
                                                )}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                ),
                            )}
                        </List>
                    </Box>
                </Drawer>
            ) : (
                <></>
            )}
        </>
    );
};

// TODO: Refactor the sidebar container in the next branch
