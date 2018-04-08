export const FETCH_CATEGORIES='FETCH_CATEGORIES';
export const fetchCategories=(categories)=>{
    return {
        type:FETCH_CATEGORIES,
        categories
    }
}
