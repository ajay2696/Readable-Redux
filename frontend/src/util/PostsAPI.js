const apiUrl='http://localhost:3001';
const apiPassword='newpassword';

const headers={
    'Accept':'application/json',
    'Authorization':apiPassword
}
export const getAllPosts=()=>
    fetch(`${apiUrl}/posts`,{headers})
        .then(res=>res.json())
        .then(data=>data);

export const votePost=(id,option)=>
    fetch(`${apiUrl}/posts/${id}`,{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Authorization':apiPassword,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'option':option})
    }).then(res=>res.json());

export const addPost=(post)=>
    fetch(`${apiUrl}/posts`,{
        method:'POST',
        headers:{
            ...headers,
            'Content-Type':'application/json'
        },
        body:JSON.stringify(post)
    }).then(res=>res.json());
export const loadPost=(postID)=>
    fetch(`${apiUrl}/posts/${postID}`,{
        method:'GET',
        headers:{
            ...headers
        }}).then((res)=>res.json());
export const deletePost=(postID)=>
    fetch(`${apiUrl}/posts/${postID}`,{
        method:'DELETE',
        headers:{
            ...headers
        }}).then(res=>res.json());

export const editPost=(post)=>
    fetch(`${apiUrl}/posts/${post.id}`,{
        method:'PUT',
        headers:{
            ...headers
        },
        body:JSON.stringify({'body':post.body,'title':post.title})
    }).then(res=>res.json());
