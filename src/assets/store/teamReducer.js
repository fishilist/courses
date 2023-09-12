let defaultState = {
    teams: [
        {
            "name": "Учителя",
            "members": [
                {
                    id: 1,
                    name: "Виталий",
                    surname: "Балахин",
                    age: "34",
                    post: "Математик",
                },
                {
                    id: 2,
                    name: "Ирина",
                    surname: "Василькова",
                    age: "26",
                    post: "Программист",
                }
            ]
        },
        {
            "name": "Разработчики",
            "members": [
                {
                    id: 3,
                    name: "Андрей",
                    surname: "Программистов",
                    age: "21",
                    post: "Программист",
                },
                {
                    id: 4,
                    name: "Лиза",
                    surname: "Дезюгова",
                    age: "29",
                    post: "Программист",
                }
            ]
        }
    ]
}

const ADD_TEAM = "ADD_TEAM";
const ADD_TEAMS = "ADD_TEAMS";
const DELETE_TEAM = "DELETE_TEAM";

export function teamReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TEAM:
            return {...state, team: [...state.team, action.payload]}
        case ADD_TEAMS:
            return {...state, team: [...state.team, ...action.payload]}
        case DELETE_TEAM:
            return {...state, team: [state.team.filter(item => item.id !== action.payload)]}
        default:
            return state;
    }
}

export function addTeam(payload) {
    return {
        type: ADD_TEAM,
        payload: payload
    }
}

export function addTeams(payload) {
    return {
        type: ADD_TEAM,
        payload: payload
    }
}

export function deleteTeam(payload) {
    return {
        type: DELETE_TEAM,
        payload: payload
    }
}