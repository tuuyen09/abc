export function showAccount(accounts){
    return {
        type: "LIST",
        payload: accounts
    }
}
export function addAccount(account){
    return{
        type: "ADD",
        payload: account
    }
}
export function editAccount(account){
    return{
        type: "EDIT",
        payload: account
    }
}
export function searchAccount(userName){
    return{
        type: "SEARCH",
        payload: userName
    }
}
export function deleteAccount(id){
    return{
        type: "DELETE",
        payload: id
    }
}