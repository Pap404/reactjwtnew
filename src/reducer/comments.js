const initialState = {
    comments: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case 'COMMENTS':
            return {
                comments: action.payload
            };
        default:
            return state;
    }

}