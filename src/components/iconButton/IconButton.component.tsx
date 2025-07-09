import React, { PropsWithChildren } from 'react';

import { IconButtonProps } from '@mui/material';

import { StyledIconButton } from './IconButton.styles';

/**
 * A customized version of the MUI IconButton component that uses a custom styles.
 */
export const CustomIconButton: React.FC<PropsWithChildren<IconButtonProps>> = ({
    /**
     * The content of the button.
     */
    children,
    /**
     * The props of the MUI IconButton component.
     */
    ...props
}) => (
    <StyledIconButton
        /**
         * Passes all the props to the MUI IconButton component.
         */
        {...props}
    >
        {children}
    </StyledIconButton>
);
