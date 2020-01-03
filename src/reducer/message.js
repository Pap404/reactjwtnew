const initialState = {
    message: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case 'MESSAGE':
            return {
                message: action.payload
            };
        case 'CREATE_MESSAGE':
            return {
                ...state,
                message: state.message.concat(action.payload)
            };
        default:
            return state;
    }

}