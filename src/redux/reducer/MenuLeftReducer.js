export const Loading = "Loading";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
const initialState = {
    loading: false,
    response: [],
    error: false,
};
const getMenuReducer = (state = initialState, action) => {     
    switch (action.type) {
        case Loading:
            return {
                ...state,
                loading: true,
                response: [],
                error: null,
            };
        case SUCCESS:
            return {
                ...state,
                loading: false,
                response: action.data,
                error: null,
            };
        case ERROR:
            return {
                ...state,
                loading: false,
                response: [],
                error: action.error,
            };
        default:
            return state;
    }
}
export default getMenuReducer;