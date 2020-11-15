
export default (state = [], action) => {
    switch (action.type) {
        case "COMMENT_ADD":
            state.push(action.payload);
            return state;
        case "COMMENT_LIST":
            state = action.payload || [];
            return state;
        default:
            return state;
    }
}
