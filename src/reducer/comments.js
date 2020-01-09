const initialState = {
    comments: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case 'COMMENTS':
            return {
                comments: action.payload
            };
        // case 'CREATE_COMMENT':
        //     return {
        //         ...state,
        //         comments: state.comments.concat(action.payload)
        //     };
        default:
            return state;
    }

}