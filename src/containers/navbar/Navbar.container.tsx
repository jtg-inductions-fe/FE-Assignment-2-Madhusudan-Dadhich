import React, { useContext } from 'react';

import { AvatarPopover } from 'components/avatarPopover';
import { CustomIconButton } from 'components/iconButton';
import { AutocompleteSearchbar } from 'components/searchbar';
import { ProductContext } from 'contexts';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from 'types/Product';

import { Menu as MenuIcon, Notifications } from '@mui/icons-material';
import { Stack, Tooltip } from '@mui/material';

import {
    LeftNavbarWrapper,
    SidebarIconWrapper,
    StyledAppBar,
    StyledLinkWrapper,
    StyledToolbar,
} from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

/**
 * The Navbar component is the header component of the application.
 * It contains the navigation and search bar.
 * @param sidebarOpen - Whether the sidebar is open or not.
 * @param onSidebarClicked - The function to be called when the sidebar icon is clicked.
 */
export const Navbar: React.FC<NavbarProps> = ({
    sidebarOpen,
    onSidebarClicked,
}) => {
    /**
     * The data for the search bar.
     * The data is an array of products from the product context.
     */
    const searchData = useContext(ProductContext);

    const navigate = useNavigate();

    /**
     * The function to be called when the user selects an option from the search bar.
     * @param option - The selected option.
     */
    const handleSearch = (option: unknown) => {
        /**
         * The selected option is a product.
         * If the product has a redirectTo property, navigate to that path.
         */
        const product = option as Product;
        if (product && product.redirectTo) {
            void navigate(product.redirectTo);
        }
    };

    /**
     * The function to filter the product data based on the search query.
     * @param data - The data to be filtered.
     * @param query - The search query.
     * @returns The filtered list of products.
     */
    const filterProductData = (data: Product[], query: string) => {
        let input = query.trim();
        input = input.toLowerCase();

        /**
         * If the search query is empty, return the original data.
         * Otherwise, filter the data based on the search query.
         */
        const filteredList = !input
            ? data
            : data.filter((product) => {
                  /**
                   * Convert the product name to lowercase for case insensitive search.
                   */
                  let candidate = product.name;
                  candidate = candidate.toLowerCase();
                  /**
                   * Return true if the product name contains the search query.
                   */
                  return candidate.includes(input);
              });

        return filteredList;
    };

    /**
     * The function to get the label of the product for the search bar.
     * @param option - The product.
     * @returns The label of the product.
     */
    const getProductLabel = (option: unknown) => {
        /**
         * If the option is a string, return the string.
         * Otherwise, return the name of the product.
         */
        if (typeof option === 'string') return option;
        return (option as Product).name;
    };

    return (
        <StyledAppBar>
            <StyledToolbar disableGutters>
                <SidebarIconWrapper
                    title={
                        sidebarOpen == true ? 'Close sidebar' : 'Open sidebar'
                    }
                >
                    <CustomIconButton
                        aria-label="menu"
                        onClick={onSidebarClicked}
                    >
                        <MenuIcon />
                    </CustomIconButton>
                </SidebarIconWrapper>
                <LeftNavbarWrapper>
                    <Link to={'/'}>
                        <img
                            alt="Company Logo"
                            src="src/assets/resources/vectors/logo.svg"
                        />
                    </Link>
                    <AutocompleteSearchbar<Product>
                        list={searchData}
                        filterFunction={filterProductData}
                        getOptionLabel={getProductLabel}
                        handleSearch={handleSearch}
                    />
                </LeftNavbarWrapper>
                <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                    <Tooltip title="Notifications">
                        <StyledLinkWrapper
                            to={'/notifications'}
                            aria-label="notifications"
                        >
                            <Notifications />
                        </StyledLinkWrapper>
                    </Tooltip>
                    <AvatarPopover />
                </Stack>
            </StyledToolbar>
        </StyledAppBar>
    );
};
