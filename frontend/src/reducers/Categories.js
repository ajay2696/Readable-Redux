import {FETCH_CATEGORIES} from '../actions/Categories';

export const categories=(categories=[],action)=>{
    switch(action.type){
    case FETCH_CATEGORIES:
        return action.categories;
    default:
        return categories;
    }
}
