import selectPostByIdModel from "../../models/posts/selectPostByIdModel.js";

const getPostController = async (req, res, next) => {
    try {
        const {postId} = req.params;

        const post = await selectPostByIdModel(postId);

        res.send({
            status: 'ok',
            data: post
        });
    
    } catch (error) {
        next(error);
    }
}

export default getPostController;