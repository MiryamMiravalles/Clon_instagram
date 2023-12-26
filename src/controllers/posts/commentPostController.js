import insertCommentModel from "../../models/posts/insertCommentModel.js";

const commentPostController = {
    async addComment(req, res, next) {
        try {
            const { postId } = req.params;
            const { comment } = req.body;

            if (!req.post) {
                return res.status(404).send({
                    status: 'fail',
                    message: 'Post not found'
                });
            }


            await insertCommentModel(comment, req.user.id, postId, next);

            res.status(200).json({
                status: 'ok',
                message: 'Comentario agregado correctamente',
                data: comment,
            });
        } catch (error) {
            next(error);
        }
    },
};

export default commentPostController;