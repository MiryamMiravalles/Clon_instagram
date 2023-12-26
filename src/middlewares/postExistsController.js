import selectPostByIdModel from '../models/posts/selectPostByIdModel.js';

const postExistsController = async (req, res, next) => {
    try {
        const {postId} = req.params;

        const post = await selectPostByIdModel(postId);

        if (!post) {
            return res.status(404).send({
                status: 'fail',
                message: 'Post not found'
            });
        }

        req.post = post;
        req.postUserId = post.userId;
        next();
    
    } catch (error) {
        next(error);
    }
}

export default postExistsController;