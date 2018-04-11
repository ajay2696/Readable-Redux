import {RECIEVED_CATEGORIES} from '../actions/Categories';

export const categories=(categories=[],action)=>{
    switch(action.type){
    case RECIEVED_CATEGORIES:
        return action.categories;
    default:
        return categories;
    }
}
