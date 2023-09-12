let defaultState = {
    files: [
        {
            id: 1,
            title: 'assets',
            type: 'folder',
            children: [
                {
                    id: 2,
                    title: 'styles',
                    type: 'folder',
                    children: [
                        {
                            id: 3,
                            title: 'server',
                            type: 'folder',
                            children: []
                        },
                        {
                            id: 4,
                            title: 'components',
                            type: 'folder',
                            children: [
                                {
                                    id: 5,
                                    title: 'index',
                                    type: 'file',
                                    extension: 'html',
                                    fullName: 'index.html',
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 6,
                    title: 'alternative',
                    type: 'folder',
                    children: [
                        {
                            id: 7,
                            title: 'Folder...',
                            type: 'folder',
                            children: [
                                {
                                    id: 8,
                                    title: 'styles',
                                    type: 'folder',
                                    children: [
                                        {
                                            id: 9,
                                            title: 'server',
                                            type: 'folder',
                                            children: []
                                        },
                                        {
                                            id: 10,
                                            title: 'components',
                                            type: 'folder',
                                            children: [
                                                {
                                                    id: 11,
                                                    title: 'index',
                                                    type: 'file',
                                                    extension: 'html',
                                                    fullName: 'index.html',
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 12,
                                    title: 'alternative',
                                    type: 'folder',
                                    children: [
                                        {
                                            id: 13,
                                            title: 'MISTAKE!!',
                                            type: 'someThing',
                                            children: [],
                                            fullName: 'MISTAKE!!',
                                        },
                                        {
                                            id: 14,
                                            title: 'TypeScript',
                                            type: 'file',
                                            extension: 'html',
                                            fullName: 'TypeScript.ts',
                                        }
                                    ]
                                }
                            ],
                        },
                        {
                            id: 15,
                            title: 'TypeScript',
                            type: 'file',
                            extension: 'html',
                            fullName: 'TypeScript.ts',
                        }
                    ]
                }
            ]
        },
        {
            id: 16,
            title: 'SQL',
            type: 'folder',
            children: []
        },
        {
            id: 17,
            title: 'Wrong))',
            type: 'someThing',
            children: [],
            fullName: 'Wrong))',
        },
        {
            id: 18,
            title: 'script',
            type: 'file',
            extension: 'js',
            fullName: 'script.js',
        }
    ]
}

const ADD_FILE = "ADD_FILE";
const ADD_FILES = "ADD_FILES";
const DELETE_FILE = "DELETE_FILE";

export function filesReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_FILES:
            return {...state, files: [...state.files, ...action.payload]}
        case ADD_FILE:
            return {...state, files: [...state.files, action.payload]}
        case DELETE_FILE:
            return {...state, files: [state.files.filter(item => item.id !== action.payload)]}
        default:
            return state;
    }
}

export function addFile(payload) {
    return {
        type: ADD_FILE,
        payload: payload
    }
}

export function addFiles(payload) {
    return {
        type: ADD_FILES,
        payload: payload
    }
}

export function deleteCourse(payload) {
    return {
        type: DELETE_FILE,
        payload: payload
    }
}