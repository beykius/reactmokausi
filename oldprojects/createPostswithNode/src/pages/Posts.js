import React, {useEffect, useState} from 'react';
import useStore from "../store/main";



const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2005/posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);



    const handleDelete = (id) => {
        console.log('Deleting post with id:', id);
        fetch(`http://localhost:2005/posts/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                //REFETCH POSTS AFTER DELETION
                fetch("http://localhost:2005/posts")
                    .then((res) => res.json())
                    .then((updatedPosts) => {
                        setPosts(updatedPosts);
                    })
                    .catch((error) => {
                        console.error("Error fetching posts:", error);
                    });
            })
            .catch((error) => {
                console.error("Error deleting post:", error);
            });
    };



    return (
        <div className='m-5 d-flex gap-5 flex-wrap text-center'>
            {posts.map((post, i) => (
                <div key={post.id} className='profile d-flex flex-wrap text-center'
                >
                    <div className='m-2 text-center'>
                        <img
                            src={post.imageUrl}
                            alt={`${post.title}`}
                            style={{width: 'auto', height: '200px', borderRadius: '50px'}}
                        />
                    </div>
                    <div className='text-uppercase text-center m-2 text-wrap'><b>{post.title}</b></div>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>

                </div>
            ))}
        </div>
    );
};

export default Posts;