import routes from "../routers/sidebar";
import { NavLink, Link, useLocation } from "react-router";
import SidebarSubmenu from "./SidebarSubmenu";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";

function LeftSidebar() {
    const location = useLocation();

    const close = () => {
        document.getElementById("left-sidebar-drawer").click();
    };

    return (
        <div className="drawer-side z-30">
            <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
            <ul className="menu bg-base-100 text-base-content min-h-full w-80 pt-2">
                <button
                    className="btn btn-ghost bg-base-300 btn-circle absolute top-0 right-0 z-50 mt-4 mr-2 lg:hidden"
                    onClick={() => close()}
                >
                    <XMarkIcon className="inline-block h-5 w-5" />
                </button>

                <li className="mb-2 text-xl font-semibold">
                    <Link to={"/app/welcome"}>
                        <img
                            className="w-full object-contain h-16 ml-4"
                            src="/logo2.png"
                            alt="DashWind Logo"
                        />
                        
                    </Link>{" "}
                </li>
                {routes.map((route, k) => {
                    return (
                        <li className="" key={k}>
                            {route.submenu ? (
                                <SidebarSubmenu {...route} />
                            ) : (
                                <NavLink
                                    end
                                    to={route.path}
                                    className={({ isActive }) =>
                                        `${isActive ? "bg-base-200 font-semibold" : "font-normal"}`
                                    }
                                >
                                    {route.icon} {route.name}
                                    {location.pathname === route.path ? (
                                        <span
                                            className="bg-primary absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md"
                                            aria-hidden="true"
                                        ></span>
                                    ) : null}
                                </NavLink>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default LeftSidebar;
