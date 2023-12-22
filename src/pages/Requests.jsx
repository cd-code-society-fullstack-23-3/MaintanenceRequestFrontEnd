import {RequestTable} from "../components/RequestTable";
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";

export const Request =() => {
    const navigate = useNavigate();

    function addUser(){
        navigate("/add")
    }

    return(
        <>
            <Button variant="outlined" onClick={e => addUser()}>Add User</Button>
            <RequestTable />
        </>
    )
}