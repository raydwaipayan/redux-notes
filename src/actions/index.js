import { ADD_ARTICLE } from "../constants/action-types";
import { DELETE_ARTICLE } from "../constants/action-types";
import { SET_INITIAL } from "../constants/action-types";
export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});

export const deleteArticle= article => ({
    type: DELETE_ARTICLE,
    payload: article
});

export const setInitial= articles => ({
    type: SET_INITIAL,
    payload: articles
});