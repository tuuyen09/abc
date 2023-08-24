import {Link} from "react-router-dom";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchAccount} from "../redux/accountAction";

function ShowAccount() {
    const accounts = useSelector(state => state.accounts)
    const dispatch = useDispatch()
    function search(userName){
        dispatch(searchAccount(userName))
    }
    return (<>
        <div className="container">
            <h2>Account List</h2>
            <Link to={"/create"}>
                <button>Create</button>
            </Link>
            <input type="text"/><button onClick={search}>Search</button>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>User name</th>
                    <th>Avatar</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                {
                    accounts.map((a) => {
                        return (
                            <tr>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td><img src={a.img} height={100}/></td>
                                <td>{a.role.name}</td>
                                <td>
                                    <Link to={"/edit"}>
                                        <button type="button" className="btn btn-warning">Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={"/delete/" + a.id}>
                                        <button type="button" className="btn btn-danger">Delete</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </>)
}

export default ShowAccount;