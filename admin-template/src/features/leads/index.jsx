import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { openModal } from "../common/modalSlice";
import { getLeadsContent } from "./leadSlice";
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";

const TopSideButtons = () => {
    const dispatch = useDispatch();

    const openAddNewLeadModal = () => {
        dispatch(openModal({ title: "Add New Lead", bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW }));
    };

    return (
        <div className="float-right inline-block">
            <button
                className="btn btn-sm btn-primary px-6 normal-case"
                onClick={() => openAddNewLeadModal()}
            >
                Add New
            </button>
        </div>
    );
};

function Leads() {
    const { leads } = useSelector((state) => state.lead);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLeadsContent());
    }, []);

    const deleteCurrentLead = (index) => {
        dispatch(
            openModal({
                title: "Confirmation",
                bodyType: MODAL_BODY_TYPES.CONFIRMATION,
                extraObject: {
                    message: `Are you sure you want to delete this lead?`,
                    type: CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE,
                    index,
                },
            })
        );
    };

    return (
        <>
            <TitleCard title="Current Leads" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
                {/* Leads List in table format loaded from slice after api call */}
                <div className="w-full overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>age</th>
                                <th>Created At </th>
                                <th>position</th>
                                <th>Assigned To</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.map((l, k) => {
                                return (
                                    <tr key={k}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img src={l.avatar} alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        {l.Name.first_name}
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        {l.Name.last_name}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{l.age}</td>
                                        <td>
                                            {moment(new Date())
                                                .add(-5 * (k + 2), "days")
                                                .format("DD MMM YY")}
                                        </td>
                                        <td>{l.position}</td>
                                        <td>{l.Name.last_name}</td>
                                        <td>
                                            <button
                                                className="btn btn-square btn-ghost"
                                                onClick={() => deleteCurrentLead(k)}
                                            >
                                                <TrashIcon className="w-5" />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    );
}

export default Leads;
