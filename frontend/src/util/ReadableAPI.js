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

export const getAllPosts=()=>
    fetch(`${apiUrl}/posts`,{headers})
        .then(res=>res.json())
        .then(data=>data);

export const vote=(id,option)=>
    fetch(`${apiUrl}/posts/${id}`,{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Authorization':apiPassword,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'option':option})
    }).then(res=>res.json());

export const addPost=(post)=>{
    fetch(`${apiUrl}/posts`,{
        method:'POST',
        headers:{
            ...headers,
            'Content-Type':'application/json'
        },
        body:JSON.stringify(post)
    }).then(res=>res.json());
}
