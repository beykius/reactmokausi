import React from 'react';
import useStore from "../store/main";
import {useNavigate} from "react-router-dom";

const SinglePost = () => {

    const selectedPost = useStore((state) => state.selectedPost);
    const loggedInUser = useStore((state) => state.loggedInUser);
    const handleCommentChange = useStore((state) => state.handleCommentChange);
    const handleComment = useStore((state) => state.handleComment);
    const allComments = useStore((state) => state.allComments);
    const comment = useStore((state) => state.newComment.comment);
    const postComments = allComments.filter((c) => c.postId === selectedPost.id);
    const deletePost = useStore((state) => state.deletePost);
    const navigate = useNavigate();
    const deleteComment = useStore((state) => state.deleteComment);

    const handleDeletePost = (postId) => {
        deletePost(postId);
        navigate(`/posts`);
        console.log('post deleted')
    };

    const handleDeleteComment = (commentId) => {
        deleteComment(commentId);
        console.log('comment deleted')
    }


    return (
        <div className='m-5 text-center'>
            <img src={selectedPost.imageUrl} alt={selectedPost.title}
                 style={{width: 'auto', height: '200px', marginBottom: '10px'}}/>
            <h1>{selectedPost.title}</h1>

            <p>Posted by: {selectedPost.author}</p>
            <p>{selectedPost.description}</p>
            {selectedPost.author === loggedInUser.name
                ? <p>
                    <button onClick={() => handleDeletePost(selectedPost.id)}>Delete Post</button>
                </p>
                : null}

            <br/>
            <h2>Comments</h2>
            <p className='d-flex align-items-center flex-column mb-2'>
                {postComments.map((commentObj, index) => (
                    <div className='box mb-2' key={index}>
                        <p className='fw-bold'> {commentObj.comment}</p>
                        <p>Posted by: {commentObj.author}</p>
                        {commentObj.author === loggedInUser.name
                            ? <p>
                                <button onClick={() => handleDeleteComment(commentObj.commentId)}>Delete Comment</button>
                            </p>
                            : null}
                    </div>
                ))}

            </p>
            <div className='d-flex'>
                <input
                    type="text"
                    placeholder="Comment"
                    name="comment"
                    value={comment}
                    onChange={handleCommentChange}
                    required
                />
                <button onClick={handleComment}>Submit</button>

            </div>

        </div>
    );
};

export default SinglePost;