import {
  REGISTER_SUCCESS,
  REGISTER_LOADING,
  REGISTER_FAIL,
  CLEAR_AUTH_STATE,
} from '../../constants/actionTypes';
const auth = (state, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        data: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default auth;
