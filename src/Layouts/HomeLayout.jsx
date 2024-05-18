import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

/*
Key Changes Using the Chatgpt when original code was not run well:
1-Setting Appropriate Width: The changeWidth function sets the drawer's width to 16rem to open it,
 while the hideDrawer function sets it to 0 to close it.
2-Toggle Drawer Logic: The toggleDrawer function checks if the drawer toggle is checked or not and opens 
or closes the drawer accordingly.
3-Positioning and Overlay: Added CSS styles directly to ensure the drawer is correctly
 positioned and overlaid, with position: 'absolute', left: '0', top: '0', and zIndex: '50' 
 for the drawer side. This ensures the drawer correctly overlays other content.
note: These changes will ensure that the drawer opens and closes correctly and
 that it is properly overlaid and positioned.
*/
function HomeLayout({children}) {

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        if (drawerSide.length > 0) {
            drawerSide[0].style.width = "16rem"; // Set appropriate width to open the drawer
        }
    }

    function hideDrawer() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        if (drawerSide.length > 0) {
            drawerSide[0].style.width = "0"; // Set width to 0 to close the drawer
        }
        const element = document.getElementsByClassName("drawer-toggle");
        if (element.length > 0) {
            element[0].checked = false;
        }
    }

    function toggleDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        if (element.length > 0) {
            if (element[0].checked) {
                changeWidth();
            } else {
                hideDrawer();
            }
        }
    }

    return (
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-fit">
                <input className="drawer-toggle" id="my-drawer" type="checkbox" onChange={toggleDrawer} />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">
                        <FiMenu
                            onClick={changeWidth}
                            size={"32px"}
                            className="font-bold text-white m-4"
                        />
                    </label>
                </div>
                <div className="drawer-side transition-width duration-300" style={{ width: '0' }}>
                    <label htmlFor="my-drawer" className="drawer-overlay" onClick={hideDrawer}></label>
                    <ul className="menu p-4 w-64 bg-base-200 text-base-content relative">
                        <li className="absolute right-2 z-50">
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">All Courses</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {children}
            <Footer/>
        </div>
    );
}

export default HomeLayout;
