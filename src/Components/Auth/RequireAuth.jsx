import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

/**
 * RequireAuth component ensures that only authenticated users with the correct roles
 * can access certain routes. If the user is not authenticated, they are redirected to 
 * the login page. If the user is authenticated but does not have the required role, 
 * they are redirected to an access denied page.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.allowedRoles - The roles allowed to access the route.
 * @returns {JSX.Element} - The component rendering logic.
 */
function RequireAuth({ allowedRoles }) {
    // Extract isLoggedIn and role from the Redux store
    const { isLoggedIn, role } = useSelector((state) => state.auth);

    // Check if the user is logged in and their role is in the list of allowed roles
    return isLoggedIn && allowedRoles.find((myRole) => myRole == role) ? (
        // If user is logged in and has an allowed role, render the nested routes (Outlet)
        <Outlet />
    ) : isLoggedIn ? ( 
        // If user is logged in but does not have an allowed role, redirect to the denied page
        <Navigate to="/denied" />
    ) : (
        // If user is not logged in, redirect to the login page
        <Navigate to="/login" />
    );
}

export default RequireAuth;
