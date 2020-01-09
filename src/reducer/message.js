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
        case 'CREATE_COMMENT':
            return {
                message: state.message.flatMap(message => {
                    if (message.id === action.id) {
                        return {
                            ...message,
                            comment: message.comment.concat(action.payload)
                        };
                    } else {
                        return message;
                    }
                })
    };
        default:
            return state;
    }

}