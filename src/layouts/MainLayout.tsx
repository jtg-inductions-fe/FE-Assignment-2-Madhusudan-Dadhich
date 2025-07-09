import { Sidebar } from 'containers/sidebar';
import { Outlet } from 'react-router-dom';

/**
 * The MainLayout component serves as the primary layout for the application.
 * It includes the Sidebar and renders child routes using the Outlet component.
 */
export const MainLayout = (): React.ReactElement => (
    <main>
        <Sidebar />
        <Outlet />
    </main>
);
