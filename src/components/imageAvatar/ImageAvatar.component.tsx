import React from 'react';

import { StyledImageAvatar } from './ImageAvatar.styles';
import { ImageAvatarProp } from './ImageAvatar.types';

/**
 * ImageAvatar component renders a styled avatar image.
 */
export const ImageAvatar: React.FC<ImageAvatarProp> = ({ imgAlt, imgSrc }) => (
    <StyledImageAvatar alt={imgAlt} src={imgSrc} variant="circular" />
);
