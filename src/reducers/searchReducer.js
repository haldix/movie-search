import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
} from '../constants/searchConstants';

export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return { loading: true };
    case SEARCH_SUCCESS:
      return {
        loading: false,
        success: true,
        person: action.payload,
      };
    case SEARCH_FAIL:
      return {
        message: action.payload,
      };
    default:
      return state;
  }
};
