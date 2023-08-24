import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {editAccount} from "../redux/accountAction";

function EditAccount() {
    const [account, setAccount] = useState({id: 0, name: "", img: "", role: {id: 1}})
    const [roleId, setRoleId] = useState(1)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleInputChange(e) {
        const {name, value} = e.target;
        setAccount({...account, [name]: value});
    }

    function handleInputChangeRoleId(e) {
        const value = e.target;
        setRoleId(value);
    };

    function edit() {
        setAccount({...account, role: {id: roleId}})
        dispatch(editAccount(account))
        navigate("/")
    }

    return (
        <div className="container">
            <h2>Edit account</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th><input name="id" value={account.id} onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>User name</th>
                    <th><input value={account.name} name="name" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Linh avatar</th>
                    <th><input value={account.img} name="img" onChange={handleInputChange}/></th>
                </tr>
                <tr>
                    <th>Role</th>
                    <th><select onChange={handleInputChangeRoleId} value="1">
                        <option value="1">USER</option>
                        <option value="2">ADMIN</option>
                    </select></th>
                </tr>

                <button onClick={edit} className="btn btn-warning">Update</button>
                <Link to={"/"}>
                    <button className="btn btn-danger">Back</button>
                </Link>
                </thead>
            </table>
        </div>
    )
}

export default EditAccount