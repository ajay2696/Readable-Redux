import React from 'react';
import '../css/newsitem.css';
function Post(props){
    const post=props.post;
    const timestamp=new Date(post.timestamp).toLocaleTimeString();
    return (
        <div>
            <table>
                <tbody>
                    <tr className="title">
                        <td>{post.title}</td>
                    </tr>
                    <tr className="subtext">
                        <td>
                            <div>
                            Posted On:||{timestamp}|Author:{post.author}|
                            comments:{post.commentCount}|
                            Votes:{post.voteScore}|
                                <button onClick={()=>props.upVote(post.id)}>upvote</button>
                                <button onClick={()=>props.unVote(post.id)}>unvote</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr/>
        </div>
    );
}

export default Post;
