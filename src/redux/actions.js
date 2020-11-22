/**
 * 
 * @param {array} value 
 */

export const setUsers = (value) => {
    return {
        type: "SET_USERS",
        payload: value
    }
}

/**
 * 
 * @param {array} value 
 */

export const setUserPosts = (value) => {
    return {
        type: "SET_USER_POSTS",
        payload: value
    }
}
