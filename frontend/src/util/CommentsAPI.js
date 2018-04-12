const apiUrl='http://localhost:3001';
const apiPassword='newpassword';

const headers={
    'Accept':'application/json',
    'Authorization':apiPassword
}
export const fetchPostComments=(postId)=>
    fetch(`${apiUrl}/posts/${postId}/comments`,
        {headers})
        .then(res=>res.json());
export const postComment=(comment)=>
    fetch(`${apiUrl}/comments`,{
        method:'POST',
        headers:{
            ...headers,
            'Content-Type':'application/json'
        },
        body:JSON.stringify(comment)}).then(res=>res.json());
export const voteComment=(commentID,option)=>
    fetch(`${apiUrl}/comments/${commentID}`,{
        method:'POST',
        headers:{
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'option':option})
    }).then(res=>res.json());

export const deleteComment=(commentID)=>
    fetch(`${apiUrl}/comments/${commentID}`,{
        method:'DELETE',
        headers:{
            ...headers
        }
    }).then(res=>res.json());

export const editComment=(comment)=>
    fetch(`${apiUrl}/comments/${comment.id}`,{
        method:'PUT',
        headers:{
            ...headers,
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({'body':comment.body,'timestamp':comment.timestamp})
    }).then(res=>res.json());
