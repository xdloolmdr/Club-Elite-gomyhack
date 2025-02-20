import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { addNewLead } from "../leadSlice"
const Name = {first_Name:"",last_Name:""}
const INITIAL_LEAD_OBJ = {
    Name,
    age : "",
    Position:"",
}

function AddLeadModalBody({closeModal}){
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ)


    const saveNewLead = () => {
        if(leadObj.Name.trim() === "")return setErrorMessage("Name is required!")
        else if(leadObj.age.trim() === "")return setErrorMessage("age is required!")
        else if(leadObj.position.trim() === "")return setErrorMessage("positionis required!")
    
        else{
            let newLeadObj = {
                "id": 7,
                "age": leadObj.age,
                "first_name": leadObj.Name.first_Name,
                "last_name": leadObj.Name.last_name,
            }
            dispatch(addNewLead({newLeadObj}))
            dispatch(showNotification({message : "New Lead Added!", status : 1}))
            closeModal()
        }
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLeadObj({...leadObj, [updateType] : value})
    }

    return(
        <>

            <InputText type="text" defaultValue={leadObj.Name.first_Name} updateType="first_name" containerStyle="mt-4" labelTitle="First Name" updateFormValue={updateFormValue}/>

            <InputText type="text" defaultValue={leadObj.Name.last_Name} updateType="last_name" containerStyle="mt-4" labelTitle="Last Name" updateFormValue={updateFormValue}/>

            <InputText type="email" defaultValue={leadObj.age} updateType="age" containerStyle="mt-4" labelTitle="age" updateFormValue={updateFormValue}/>
            <InputText type="text" defaultValue={leadObj.position} updateType="position" containerStyle="mt-4" labelTitle="position" updateFormValue={updateFormValue}/>


            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button  className="btn btn-primary px-6" onClick={() => saveNewLead(
                )}>Save</button>
            </div>
        </>
    )
}

export default AddLeadModalBody