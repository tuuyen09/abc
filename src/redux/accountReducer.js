const initialState = {
    accounts: [{
        id: 1,
        name: "Nguyễn VĂn A",
        img: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien-600x600.jpg",
        role: {id: 1, name: "USER"}
    },
        {
            id: 2,
            name: "Nguyễn Thị B",
            img: "https://demoda.vn/wp-content/uploads/2022/08/hinh-anh-avatar-nu-de-thuong.jpg",
            role: {id: 2, name: "ADMIN"}
        },
        {
            id: 3,
            name: "Nguyễn Văn C",
            img: "https://thuthuatnhanh.com/wp-content/uploads/2022/08/hinh-anh-avatar-nam-chibi.jpg",
            role: {id: 1, name: "USER"}
        },
        {
            id: 4,
            name: "Nguyễn Văn D",
            img: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
            role: {id: 2, name: "ADMIN"}
        },
        {
            id: 5,
            name: "Nguyễn Thị E",
            img: "https://antimatter.vn/wp-content/uploads/2023/01/hinh-anh-avatar-dep-cute-ngau-601x600.jpg",
            role: {id: 1, name: "USER"}
        }],
};
export function accountReducer(state = initialState, action){
    switch (action.type){
        case "LIST":
            return{
                ...state
            }
        case "ADD":
            return {
                ...state,
                accounts: [...state.accounts, action.payload]
            }
        case "EDIT":
            return {
                ...state,
                accounts: state.accounts.map(account =>
                    account.id === action.payload.id ? action.payload : account)
            }
        case 'SEARCH':
            return {
                ...state,
                accounts: state.accounts.filter(account =>
                    account.name.match(account.payload))
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                accounts: state.accounts.filter(account => account.id !== action.payload),
            }
    }
}