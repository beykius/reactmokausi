import React from 'react';
import useStore from "../store/main";
import {useNavigate} from 'react-router-dom';

const Posts = () => {

    const createdPosts = useStore((state) => state.createdPosts);
    const selectPost = useStore((state) => state.selectPost);
    const navigate = useNavigate();
    const loggedInUser = useStore((state) => state.loggedInUser);
    const handleLikePost = useStore((state) => state.handleLikePost);
    const deletePost = useStore((state) => state.deletePost);

    const handlePostClick = (post) => {
        selectPost(post);
        navigate(`/post/${post.id}`);
    };

    const handleDeletePost = (postId) => {
        deletePost(postId);
        console.log('post deleted')
    };


    return (
        <div className='m-5 d-flex gap-5 flex-wrap text-center'>
            {createdPosts.map((post) => (
                <div key={post.id} className='profile d-flex flex-wrap text-center'
                     >
                    <div className='m-2 text-center'>
                        <img
                            src={post.imageUrl}
                            alt={`${post.title}`}
                            style={{width: 'auto', height: '200px', borderRadius: '50px'}}
                        />
                    </div>
                    <div className='text-uppercase text-center m-2 text-wrap' onClick={() => handlePostClick(post)}><b>{post.title}</b></div>
                    <div>Posted by: {post.author}</div>
                    <div className='text-justify'>{post.description}</div>
                    {post.author === loggedInUser.name
                        ? <p>
                            <button onClick={() => handleDeletePost(post.id)}>Delete Post</button>
                        </p>
                        : null}
                    <p className='d-flex flex-end'>

                        <p
                            onClick={() => post.likes.includes(loggedInUser.name) ? null : handleLikePost(post.id)}
                        >
                            {post.author === loggedInUser.name
                                ? `👍 (${post.likeCount})`
                                : post.likes.includes(loggedInUser.name)
                                    ? `❤️ (${post.likeCount})`
                                    : `👍 (${post.likeCount})`}
                        </p>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Posts;