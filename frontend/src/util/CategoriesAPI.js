const apiUrl='http://localhost:3001';
const apiPassword='newpassword';

const headers={
    'Accept':'application/json',
    'Authorization':apiPassword
}
export const getCategories=()=>
    fetch(`${apiUrl}/categories`,{headers})
        .then(res=>res.json())
        .then(data=>data.categories);
