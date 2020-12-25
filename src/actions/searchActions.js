import axios from 'axios';
import config from '../config';
import {
  NEW_KEYWORDS,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
} from '../constants/searchConstants';

const { API_KEY } = config;

export const getPerson = (keywords) => async (dispatch) => {
  const urlKeywords = keywords
    .split(' ')
    .filter((w) => w !== '')
    .join('+');

  try {
    dispatch({ type: NEW_KEYWORDS, payload: urlKeywords });
    dispatch({ type: SEARCH_REQUEST });
    const url = `https://api.themoviedb.org/3/search/person?query=${urlKeywords}&api_key=${API_KEY}`;

    const { data } = await axios.get(url);

    dispatch({ type: SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SEARCH_FAIL,
      payload: error.message,
    });
  }
};

export const nextPage = (keywords, page) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_REQUEST });
    const url = `https://api.themoviedb.org/3/search/person?query=${keywords}&page=${page}&api_key=${API_KEY}`;

    const { data } = await axios.get(url);

    dispatch({ type: SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SEARCH_FAIL,
      payload: error.message,
    });
  }
};
