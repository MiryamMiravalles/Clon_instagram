import { likeAlreadyExistsError } from '../../services/errorService.js';
import insertLikeModel from '../../models/posts/insertLikeModel.js';
import selectPostByIdModel from '../../models/posts/selectPostByIdModel.js';

const likePostController = async (req, res, next) => {
    try {
        const { postId } = req.params;
        const { value } = req.body;

        const post = await selectPostByIdModel(postId);

        // el dueño del post no puede dar like a su propio post
        if(post.userId === req.user.id) likeAlreadyExistsError();

        const likesAvg = await insertLikeModel(value, postId, req.user.id);

        res.send({
            status: 'ok',
            data: likesAvg,
            message: 'Like OK ❤️'
        });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            likeAlreadyExistsError();
        } else {
            next(error);
        }
    }
};

export default likePostController;