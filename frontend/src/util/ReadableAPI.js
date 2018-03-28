const apiUrl='http://localhost:3001';
const apiPassword='newpassword';

const headers={
  'Accept':'application/json',
  'Authorization':apiPassword
}

export const getCategories=()=>
  fetch('http://localhost:3001/categories',{headers})
    .then(res=>res.json())
    .then(data=>data.categories);

export const getAllPost=()=>
  fetch(`${apiUrl}/posts`,{headers})
    .then(res=>res.json())
    .then(data=>data);
