let defaultState = {
    value: ""
}

const SET_SEARCH = "SET_SEARCH";

export function searchReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SEARCH:
            return {...state, value: action.payload}
        default:
            return state;
    }
}

export function setSearch(payload) {
    return {
        type: SET_SEARCH,
        payload: payload
    }
}