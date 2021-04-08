import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { createPost } from '../redux/actions/postActions';
// import React from 'react';

const Postform = () => {
    const [post, setPost] = useState({})

    const onBlurHandler = e => {
        const newPost = { ...post }
        newPost[e.target.name] = e.target.value;
        // console.log(e.target.name);
        setPost(newPost)
    }

    const dispatch = useDispatch()
    const HandleSubmit = e => {
        e.preventDefault();
        // useEffect(() => {
        dispatch(createPost(post))
        // }, [dispatch, post])
    }
    // console.log(post);
    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label>Title: </label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        onBlur={onBlurHandler}
                    />
                </div>
                <br />
                <div>
                    <label>Body: </label>
                    <br />
                    <textarea
                        name="body"
                        onBlur={onBlurHandler}
                    />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Postform;
// class PostForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: '',
//             body: ''
//         };

//         this.onChange = this.onChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//     }

//     onChange(e) {
//         this.setState({ [e.target.name]: e.target.value });
//     }

//     onSubmit(e) {
//         e.preventDefault();

//         const post = {
//             title: this.state.title,
//             body: this.state.body
//         };

//         this.props.createPost(post);
//     }

//     render() {
//         return (
            // <div>
            //     <h1>Add Post</h1>
            //     <form onSubmit={this.onSubmit}>
            //         <div>
            //             <label>Title: </label>
            //             <br />
            //             <input
            //                 type="text"
            //                 name="title"
            //                 onChange={this.onChange}
            //                 value={this.state.title}
            //             />
            //         </div>
            //         <br />
            //         <div>
            //             <label>Body: </label>
            //             <br />
            //             <textarea
            //                 name="body"
            //                 onChange={this.onChange}
            //                 value={this.state.body}
            //             />
            //         </div>
            //         <br />
            //         <button type="submit">Submit</button>
            //     </form>
            // </div>
//         );
//     }
// }

// PostForm.propTypes = {
//     createPost: PropTypes.func.isRequired
// };

// export default connect(null, { createPost })(PostForm);
