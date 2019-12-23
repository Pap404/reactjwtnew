const initialState = {
    validToken: false,
    user: {},
    token: ''
};

export default function (state = initialState, action) {
    switch(action.type) {
        case 'REGISTRATION':
            return {
                ...state,
                user: action.payload,
                token: action.payload
            };
        default:
            return state;
    }

}