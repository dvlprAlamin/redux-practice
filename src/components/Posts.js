import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
// import React from 'react';

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.items);
    console.log(posts);
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])
    // const newPost = useSelector((state) => state.posts.item);
    // if (newPost) {
    //     console.log(newPost);
    //     posts.unshift(newPost);
    // }
    const postItems = posts.map(post =>
        <div key={post.id} style={{ maxWidth: 400, border: '1px solid gray' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>)
    return (
        <div>
            <h1>Posts</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
                {postItems}
            </div>
        </div>
    );
};

export default Posts;
// class Posts extends Component {
//     componentWillMount() {
//         this.props.fetchPosts();
//     }

//     componentWillReceiveProps(nextProps) {
//         if (nextProps.newPost) {
//             this.props.posts.unshift(nextProps.newPost);
//         }
//     }

//     render() {
//         const postItems = this.props.posts.map(post => (
            // <div key={post.id}>
            //     <h3>{post.title}</h3>
            //     <p>{post.body}</p>
            // </div>
//         ));
//         return (
//             <div>
//                 <h1>Posts</h1>
//                 {postItems}
//             </div>
//         );
//     }
// }

// Posts.propTypes = {
//     fetchPosts: PropTypes.func.isRequired,
//     posts: PropTypes.array.isRequired,
//     newPost: PropTypes.object
// };

// const mapStateToProps = state => ({
//     posts: state.posts.items,
//     newPost: state.posts.item
// });

// export default connect(mapStateToProps, { fetchPosts })(Posts);
