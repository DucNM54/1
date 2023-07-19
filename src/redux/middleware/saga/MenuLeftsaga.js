// import { call, takeEvery, put } from 'redux-saga/effects';

// import { Loading ,SUCCESS,ERROR} from "../../actions/MenuLeftAction";
// import { getMenuLeft } from '../api/MenuLeftApi';

// function* getMenuFlow(action) {
//     try {
//         const response = yield getMenuLeft(action.input);
//         if (response === undefined) {
//         const err = "Đã có lỗi xảy ra";

//             yield put({ type: ERROR, err });
//         } else {
//             yield put({ type: SUCCESS, response });
//         }
//     } catch (error) {
//         const err = "Không kết nối được với máy chủ";
//         yield put({ type: ERROR, err });
//     }
// }
// function* watchGetMenuSaga() {
//     yield takeEvery(Loading, getMenuFlow);
// }

// export {watchGetMenuSaga};