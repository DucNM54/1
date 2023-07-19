import { getData } from "../../../core/BaseDA";
import { ERROR, Loading, SUCCESS } from "../../reducer/MenuLeftReducer";
export const  getMenuLeft  = () => {
    return (dispatch) => {
        dispatch({ type: Loading });
        getData('https://fakestoreapi.com/products').then((response) => {
            dispatch({ type: SUCCESS, data: response });
        })
            .catch((error) => {
                const err = 'Đã có lỗi xảy ra';
                dispatch({ type: ERROR, error: err });
            });
    }

};
 
