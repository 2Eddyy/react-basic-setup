export const addtocart = (payload) => {
    return {
        type: "addtocart",
        payload: payload,
    }
}
export const favorite = (payload) => {
    return {
        type: "favorite",
        payload: payload,
    }
}
export const removeFav = (payload) => {
    return {
        type: "removefav",
        payload: payload,
    }
}
export const removecart = (payload) => {
    return {
        type: "removecart",
        payload: payload,
    }

}