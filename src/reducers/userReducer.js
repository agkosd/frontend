//用户信息
export default (state = {}, action) => {
    switch (action.type) {
        case "USER_INFO":
            return { ...state, ...action.payload };
        case "USER_INFO_CLEAR":
            return {};
        default:
            return state;
    }
};
