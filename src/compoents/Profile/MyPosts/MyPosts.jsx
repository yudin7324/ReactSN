import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../../compoents/common/FormsControls/FormsControls';

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} like={p.likes} />);

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div>
            <h3 className={s.postTitle}>Posts</h3>
            <AddNewPosrForm onSubmit={onAddPost} />
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'new post'}
                    name={'newPostText'}
                    component={Textarea}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};
const AddNewPosrForm = reduxForm({
    form: 'ProfileAddNewPosrForm',
})(AddNewPostForm);

export default MyPosts;
