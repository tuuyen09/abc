import {useDispatch} from "react-redux";
import {deleteAccount} from "../redux/accountAction";
import {useParams} from "react-router-dom";

function DeleteAccount(){
    const {id} = useParams()
    const dispatch = useDispatch()
    dispatch(deleteAccount(id))
}
export default DeleteAccount;