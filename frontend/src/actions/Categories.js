import * as CategoriesAP from '../util/CategoriesAPI';

export const RECIEVED_CATEGORIES='FETCH_CATEGORIES';
const recievedCategories=(categories)=>{
    return {
        type:RECIEVED_CATEGORIES,
        categories
    }
}
export const fetchCategories=()=>(dispatch)=>{
    CategoriesAP.getCategories().then((categories)=>dispatch(recievedCategories(categories)));
}
