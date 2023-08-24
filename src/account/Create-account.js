import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import editAccount from "./Edit-account";


function CreateAccount() {
    const [account, setAccount] = useState({id: 0, name: "", img: "", role: {id: 1}})
    const [roleId, setRoleId] = useState(1)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleInputChange(e) {
        const {name, value} = e.target;
        setAccount({...account, [name]: value});
    }

    function handleInputChangeRoleId(e) {
        const value = e.target;
        setRoleId(value);
    };

    function create() {
        setAccount({...account, role: {id: roleId}});
        dispatch(editAccount(account))
        navigate("/")
    }

    return (
        <div className="container">
            <h2>Create new account</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th><input name="id" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>User name</th>
                    <th><input name="name" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Link avatar</th>
                    <th><input name="img" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Role</th>
                    <th><select onChange={handleInputChangeRoleId}>
                        <option value="1">USER</option>
                        <option value="2">ADMIN</option>
                    </select></th>
                </tr>

                <button onClick={create}>Create</button>

                </thead>
            </table>
        </div>
    );
}

export default CreateAccount;