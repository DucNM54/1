import { ERROR, Loading, SUCCESS } from "../reducer/MenuLeftReducer";


export function fetchUserRequest() {
  return { type: Loading };
}

export function fetchUserSuccess(user) {
  return { type: SUCCESS, data: user };
}

export function fetchUserFailure(error) {
  return { type: ERROR, error: error };
}