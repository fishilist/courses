let defaultState = {
    journals: [
        {
            id: 1,
            name: "Оценки преподавателей",
        },
        {
            id: 2,
            name: "Оценки учеников",
        }
    ]
}

const ADD_JOURNAL = "ADD_JOURNAL";
const ADD_JOURNALS = "ADD_JOURNALS";
const DELETE_JOURNAL = "DELETE_JOURNAL";

export function journalReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_JOURNALS:
            return {...state, journal: [...state.journal, ...action.payload]}
        case ADD_JOURNAL:
            return {...state, journal: [...state.journal, action.payload]}
        case DELETE_JOURNAL:
            return {...state, journal: [state.journal.filter(item => item.id !== action.payload)]}
        default:
            return state;
    }
}

export function addJournal(payload) {
    return {
        type: ADD_JOURNAL,
        payload: payload
    }
}

export function addJournals(payload) {
    return {
        type: ADD_JOURNALS,
        payload: payload
    }
}

export function deleteJournal(payload) {
    return {
        type: DELETE_JOURNAL,
        payload: payload
    }
}