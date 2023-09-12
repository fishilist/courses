let defaultState = {
    courses: [
        {
            id: 1,
            name: "JavaScript",
            members: [
                {
                    id: 3,
                    name: "Алексей",
                    surname: "Ранин",
                    age: "14",
                    post: "Математик",
                },
                {
                    id: 4,
                    name: "Евдоким",
                    surname: "Гурельков",
                    age: "16",
                    post: "Программист",
                }
            ]
        },
        {
            id: 2,
            name: "C++",
            members: [
                {
                    id: 3,
                    name: "Алексей",
                    surname: "Ранин",
                    age: "14",
                    post: "Математик",
                },
                {
                    id: 4,
                    name: "Евдоким",
                    surname: "Гурельков",
                    age: "16",
                    post: "Программист",
                }
            ]
        },
        {
            id: 3,
            name: "Python",
            members: [
                {
                    id: 3,
                    name: "Алексей",
                    surname: "Ранин",
                    age: "14",
                    post: "Математик",
                },
                {
                    id: 4,
                    name: "Евдоким",
                    surname: "Гурельков",
                    age: "16",
                    post: "Программист",
                }
            ]
        }
    ]
}

const ADD_COURSE = "ADD_COURSE";
const ADD_COURSES = "ADD_COURSE";
const DELETE_COURSE = "DELETE_COURSE";

export function courseReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_COURSES:
            return {...state, courses: [...state.courses, ...action.payload]}
        case ADD_COURSE:
            return {...state, courses: [...state.courses, action.payload]}
        case DELETE_COURSE:
            return {...state, courses: [state.courses.filter(item => item.id !== action.payload)]}
        default:
            return state;
    }
}

export function addCourse(payload) {
    return {
        type: ADD_COURSE,
        payload: payload
    }
}

export function addCourses(payload) {
    return {
        type: ADD_COURSES,
        payload: payload
    }
}

export function deleteCourse(payload) {
    return {
        type: DELETE_COURSE,
        payload: payload
    }
}