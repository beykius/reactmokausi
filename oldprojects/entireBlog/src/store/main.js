import {create} from 'zustand'
import {useNavigate} from "react-router-dom";


const useStore = create((set) => ({


    myUser: {
        name: '',
        passwordOne: '',
        passwordTwo: '',
        imageUrl: '',
    },
    registeredUsers: [],
    error: null,

    loginInfo: {
        name: '',
        password: ''
    },
    loggedInUser: '',

    logout: () => {
        set({
            loggedInUser: '',
            error: null,
        });
    },

    deleteProfile: (name) => {
        set((state) => {
            const updatedUsers = state.registeredUsers.filter((user) => user.name !== name);
            const updatedPosts = state.createdPosts.filter((post) => post.author !== name);
            const updatedComments = state.allComments.filter((comment) => comment.author !== name);
            const updatedPostsLikes = updatedPosts.map((post) => {
                const updatedLikes = post.likes.filter(like => like !== name);
                return { ...post, likes: updatedLikes, likeCount: updatedLikes.length };
            });

            return {
                loggedInUser: '',
                registeredUsers: updatedUsers,
                createdPosts: updatedPostsLikes,
                allComments: updatedComments,
                error: null,
            };
        });
    },

    handleChange: (e) => {
        const {name, value} = e.target;
        set((state) => ({
            myUser: {...state.myUser, [name]: value},
            error: null,
        }));
    },

    handleChangeLogin: (e) => {
        const {name, value} = e.target;
        set((state) => ({
            loginInfo: {...state.loginInfo, [name]: value},
            error: null,
        }));
    },


    handleLogin: () => {
        set((state) => {
            const {name, password} = state.loginInfo;
            const user = state.registeredUsers.find(
                (user) => user.name === name && user.password === password
            );

            if (!user) {
                return {error: "Invalid username or password!"};
            } else {
                alert('LOGIN SUCCESFULL')
            }

            return {
                loggedInUser: user,
                error: null,
                loginInfo: {name: '', password: ''},
            };
        });
    },


    handleRegister: () => {
        set((state) => {
            const {name, passwordOne, passwordTwo, imageUrl} = state.myUser;
            if (passwordOne !== passwordTwo) {
                return {error: "Passwords do not match!"};
            }
            const userExists = state.registeredUsers.some(user => user.name === name);
            if (userExists) {
                return {error: "User already exists! Please choose a different username."};
            }

            const newUser = {name, password: passwordOne, imageUrl};
            return {
                registeredUsers: [...state.registeredUsers, newUser],
                myUser: {name: '', passwordOne: '', passwordTwo: '', imageUrl: ''},
                error: null,
            };

        });
    },

    handleImageChange: (newImageUrl) => {
        set((state) => ({
            loggedInUser: {...state.loggedInUser, imageUrl: newImageUrl},
        }));
    },

    //CREATE POSTS AND HANDLE POSTS
    newPost: {
        title: '',
        description: '',
        imageUrl: '',
        id: '',
        likes: [],
        likeCount: 0,
    },
    createdPosts: [],

    handlePost: (e) => {
        set((state) => {
            if (!state.loggedInUser) {
                return {error: "You must be logged in to create a post."};
            }
            const newPost =
                {...state.newPost,
                id: Math.random().toString(36,),
                    author: state.loggedInUser.name,
                    likes: [],
                likeCount: 0,
            };
            return {
                createdPosts: [...state.createdPosts, newPost],
                newPost: {title: '', description: '', imageUrl: ''},
                error: null,
            }
        })

    },

    handlePostChange: (e) => {
        const {name, value} = e.target;
        set((state) => ({
            newPost: {...state.newPost, [name]: value},
            error: null,
        }));
    },

    selectedPost: null,

    selectPost: (post) => {
        set({selectedPost: post});
    },

    deletePost: (postId) => {
        set((state) => {
            const updatedPosts = state.createdPosts.filter((post) => post.id !== postId);
            return {
                createdPosts: updatedPosts,
                error: null,
            };
        });
    },


    // COMMENTS

    allComments: [],
    newComment: {
        comment: '',
        commentId: '',
    },

    handleCommentChange: (e) => {
        const {name, value} = e.target;
        set((state) => ({
            newComment: {...state.newComment, [name]: value},
            error: null,
        }));
    },

    handleComment: (e) => {
        set((state) => {
            if (!state.loggedInUser) {
                return {error: "You must be logged in to write a comment."};
            }
            const newComment = {
                comment: state.newComment.comment,
                commentId: Math.random().toString(36,),
                postId: state.selectedPost.id,
                author: state.loggedInUser.name,
            };
            return {
                allComments: [...state.allComments, newComment],
                newComment: {comment: ''},
                error: null,
            };
        });
    },

    deleteComment: (commentId) => {
        set((state) => {
            const updatedComments = state.allComments.filter((comment) => comment.commentId !== commentId);
            return {
                allComments: updatedComments,
                error: null,
            };
        });
    },


    // LIKE POSTS

    handleLikePost: (postId) => {
        set((state) => {
            const post = state.createdPosts.find(p => p.id === postId);
            if (!post) {
                return { error: "Post not found!" };
            }

            if (post.likes.includes(state.loggedInUser.name)) {
                return { error: "You can only like a post once." };
            }
            if (post.author === state.loggedInUser.name) {
                return { error: "You cannot like your own post." };
            }

            const updatedPosts = state.createdPosts.map(p => {
                if (p.id === postId) {
                    const updatedLikes = [...p.likes, state.loggedInUser.name];
                    return { ...p, likes: updatedLikes, likeCount: updatedLikes.length };
                }
                return p;
            });

            return { createdPosts: updatedPosts, error: null };
        });
    },

    // MESSAGES

    message: '',

    allMessages: [],

    handleMessages: (message, recipient) => {
        set((state) => {
            if (!state.loggedInUser) {
                return { error: "You must be logged in to send a message." };
            }
            const newMessage = {
                id: Math.random().toString(36),
                author: state.loggedInUser.name,
                time: new Date().toLocaleString("en-GB", {
                    timeZone: "Europe/Vilnius",
                    hour12: false
                }),
                message: message,
                recipient: recipient.name,
            };
            console.log('New Message:', newMessage);
            return {
                allMessages: [...state.allMessages, newMessage],
                message: "",
                error: null,

            };

        });console.log('MESSAGE SENT');

    },

    setSelectedRecipient: (recipient) => {
        set({ selectedRecipient: recipient });
    },


}));
export default useStore;