const initialState = {
    validToken: false,
    user: {},
    token: ''
};

export default function (state = initialState, action) {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload,
                validToken: true
            };
        case 'USER':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }

}