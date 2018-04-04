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
