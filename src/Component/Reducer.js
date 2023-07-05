export const intialState = {
    isAthentication: JSON.parse(localStorage.getItem('userLogin')) || false,
    isLeftMenu:JSON.parse(localStorage.getItem("leftMenu"))||false,
    cart:[],
    favorite:[]
}
export const stateReducer = (state, action) => {
    switch (action.type) {
        case "login": {
            return {
                ...state,
                isAthentication: action.payload
            }
        }
        case "leftmenu": {
            return {
                ...state,
                isLeftMenu: action.payload.isLeftMenu        
            }
        }
        case "addtocart":{
            return {
                ...state,
                cart: [...state.cart, action.payload],

            }
        }
        case "favorite":{
            return{
                ...state,
                favorite:[...state.favorite,action.payload]
            }
        }
        case "removefav":{
            return{
                ...state,
                favorite:action.payload
            }
        }
        case "removecart":{
            return{
                ...state,
                cart:action.payload
            }
        }
        default: return state;
        
    }
}