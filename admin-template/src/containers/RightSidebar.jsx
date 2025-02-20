import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { useDispatch, useSelector } from "react-redux";
import NotificationBodyRightDrawer from "../features/common/components/NotificationBodyRightDrawer";
import { closeRightDrawer } from "../features/common/rightDrawerSlice";
import { RIGHT_DRAWER_TYPES } from "../utils/globalConstantUtil";
import CalendarEventsBodyRightDrawer from "../features/calendar/CalendarEventsBodyRightDrawer";

function RightSidebar() {
    const { isOpen, bodyType, extraObject, header } = useSelector((state) => state.rightDrawer);
    const dispatch = useDispatch();

    const close = (e) => {
        dispatch(closeRightDrawer(e));
    };

    return (
        <div
            className={
                "bg-opacity-25 fixed inset-0 z-20 transform overflow-hidden bg-gray-900 ease-in-out " +
                (isOpen
                    ? " translate-x-0 opacity-100 transition-opacity duration-500"
                    : " translate-x-full opacity-0 transition-all delay-500")
            }
        >
            <section
                className={
                    "bg-base-100 absolute right-0 h-full w-80 transform shadow-xl transition-all delay-400 duration-500 ease-in-out md:w-96 " +
                    (isOpen ? " translate-x-0" : " translate-x-full")
                }
            >
                <div className="relative flex h-full flex-col pb-5">
                    {/* Header */}
                    <div className="navbar flex pr-4 pl-4 shadow-md">
                        <button
                            className="btn btn-circle btn-outline btn-sm float-left"
                            onClick={() => close()}
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                        <span className="ml-2 text-xl font-bold">{header}</span>
                    </div>

                    {/* ------------------ Content Start ------------------ */}
                    <div className="overflow-y-scroll pr-4 pl-4">
                        <div className="flex w-full flex-col">
                            {/* Loading drawer body according to different drawer type */}
                            {
                                {
                                    [RIGHT_DRAWER_TYPES.NOTIFICATION]: (
                                        <NotificationBodyRightDrawer
                                            {...extraObject}
                                            closeRightDrawer={close}
                                        />
                                    ),
                                    [RIGHT_DRAWER_TYPES.CALENDAR_EVENTS]: (
                                        <CalendarEventsBodyRightDrawer
                                            {...extraObject}
                                            closeRightDrawer={close}
                                        />
                                    ),
                                    [RIGHT_DRAWER_TYPES.DEFAULT]: <div></div>,
                                }[bodyType]
                            }
                        </div>
                    </div>
                    {/* ------------------ Content End ------------------ */}
                </div>
            </section>

            <section className="h-full w-screen cursor-pointer" onClick={() => close()}></section>
        </div>
    );
}

export default RightSidebar;
