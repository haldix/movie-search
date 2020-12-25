import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  NEW_KEYWORDS,
} from '../constants/searchConstants';

export const searchReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case NEW_KEYWORDS:
      return { keywords: payload };
    case SEARCH_REQUEST:
      return { ...state, loading: true };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        person: payload,
      };
    case SEARCH_FAIL:
      return {
        message: payload,
      };
    default:
      return state;
  }
};
