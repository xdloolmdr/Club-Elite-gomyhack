import { useState } from "react";
import { useDispatch } from "react-redux";
import InputText from "../../../components/Input/InputText";
import ErrorText from "../../../components/Typography/ErrorText";
import { addNewLead } from "../leadSlice";
const INITIAL_LEAD_OBJ = {
    first_name: "",
    last_name: "",
    age: "",
    Position: "",
};

function AddLeadModalBody({ closeModal }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ);

    const saveNewLead = () => {
        console.log({ leadObj });
        if (leadObj.first_name.trim() === "") return setErrorMessage("first_Name is required!");
        if (leadObj.last_name.trim() === "") return setErrorMessage("last_Name is required!");
        if (leadObj.age.trim() === "") return setErrorMessage("age is required!");
        if (leadObj.position.trim() === "") return setErrorMessage("positionis required!");

        let newLeadObj = {
            id: 7,
            age: leadObj.age,
            Name: {
                first_name: leadObj.first_name,
                last_name: leadObj.last_name,
            },
            position: leadObj.position,
            createdAt: new Date(),
        };
        dispatch(addNewLead({ newLeadObj }));
        closeModal();
    };

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("");
        setLeadObj({ ...leadObj, [updateType]: value });
    };

    return (
        <>
            <InputText
                type="text"
                defaultValue={leadObj.first_name}
                updateType="first_name"
                containerStyle="mt-4"
                labelTitle="First Name"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="text"
                defaultValue={leadObj.last_name}
                updateType="last_name"
                containerStyle="mt-4"
                labelTitle="Last Name"
                updateFormValue={updateFormValue}
            />

            <InputText
                type="email"
                defaultValue={leadObj.age}
                updateType="age"
                containerStyle="mt-4"
                labelTitle="age"
                updateFormValue={updateFormValue}
            />
            <InputText
                type="text"
                defaultValue={leadObj.position}
                updateType="position"
                containerStyle="mt-4"
                labelTitle="position"
                updateFormValue={updateFormValue}
            />

            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>
                    Cancel
                </button>
                <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>
                    Save
                </button>
            </div>
        </>
    );
}

export default AddLeadModalBody;
