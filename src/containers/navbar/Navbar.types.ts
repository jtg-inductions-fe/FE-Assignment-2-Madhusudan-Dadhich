/**
 * Interface for the props of the Navbar component.
 */
export interface NavbarProps {
    /**
     * Function to call when the sidebar icon is clicked.
     */
    onSidebarClicked: () => void;

    /**
     * Whether the sidebar is currently open.
     */
    sidebarOpen: boolean;
}
