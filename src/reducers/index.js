import { ADD_ARTICLE } from "../constants/action-types";
import { DELETE_ARTICLE } from "../constants/action-types";
import { SET_INITIAL } from "../constants/action-types";

const initialState={
    articles:[]
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] }
        case DELETE_ARTICLE:
            return{ ...state, articles: state.articles.filter(article=> article.id!==action.payload.id)}
        case SET_INITIAL:
            return { ...state, articles: action.payload}
        default:
            return state;
    }
};
export default rootReducer;
