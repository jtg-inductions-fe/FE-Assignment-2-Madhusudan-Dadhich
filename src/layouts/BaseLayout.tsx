import React, { useState } from 'react';

import { Navbar } from 'containers/navbar';
import { ProductContext, UserContext } from 'contexts';
import { consumers } from 'mock/ConsumerData';
import { productData } from 'mock/ProductData';
import { Outlet } from 'react-router-dom';

/**
 * The BaseLayout component is the main layout component of the application.
 * It contains the navigation bar and the outlet for the application's pages.
 */
export const BaseLayout = (): React.ReactElement => {
    /**
     * The state variable that keeps track of whether the sidebar is open or not.
     * It is initially set to false.
     */
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    /**
     * The function to handle the sidebar open/close event.
     * It toggles the state of the sidebarOpen variable.
     */
    const handleSidebar = () => {
        setSidebarOpen((sidebarToggle) => !sidebarToggle);
    };

    return (
        <>
            <UserContext value={consumers[0]}>
                <ProductContext value={productData}>
                    <Navbar
                        onSidebarClicked={handleSidebar}
                        sidebarOpen={sidebarOpen}
                    />
                </ProductContext>
            </UserContext>
            <Outlet context={{ sidebarOpen, handleSidebar }} />
        </>
    );
};
