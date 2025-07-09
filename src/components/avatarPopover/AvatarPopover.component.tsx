import React, { useContext, useState } from 'react';

import { CustomIconButton } from 'components/iconButton';
import { ImageAvatar } from 'components/imageAvatar';
import { UserContext } from 'contexts';

import { Box, Tooltip, Typography } from '@mui/material';

import { PopoverAvatar, PopoverWrapper } from './AvatarPopover.styles';

/**
 * The AvatarPopover component renders a dropdown menu containing the user's avatar, name and email
 * when the user clicks on the avatar button.
 *
 * @returns {React.ReactElement} The AvatarPopover component
 */
export const AvatarPopover: React.FC = () => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    /**
     * The user data used to populate the avatar, name and email in the dropdown menu.
     */
    const userData = useContext(UserContext);

    /**
     * Handles the event when the user clicks on the avatar button to open the dropdown menu.
     *
     * @param event The event object
     */
    const openUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    /**
     * Handles the event when the user clicks outside the dropdown menu to close the menu.
     */
    const closeUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box>
            <Tooltip title="Open settings">
                <CustomIconButton
                    aria-label="user details"
                    onClick={openUserMenu}
                >
                    <ImageAvatar
                        imgAlt={userData.name}
                        imgSrc={userData.profileImage}
                    />
                </CustomIconButton>
            </Tooltip>
            <PopoverWrapper
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={closeUserMenu}
            >
                <PopoverAvatar
                    alt={userData.name}
                    src={userData.profileImage}
                />
                <Box>
                    <Typography variant="h4">{userData.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                        {userData.email}
                    </Typography>
                </Box>
            </PopoverWrapper>
        </Box>
    );
};
