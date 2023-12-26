import postExistsController from "../../middlewares/postExistsController.js";
import deleteCommentModel from "../../models/posts/deleteCommentModel.js";

const deleteCommentController = async (req, res, next) => {
    try {
        await postExistsController(req, res, async () => {
            const { commentId, postId } = req.params;
            const userId = req.userId;

            const deleted = await deleteCommentModel(userId, postId, commentId);

            if(deleted) {
                res.send({
                    status: 'ok',
                    message: 'Comentario eliminado correctamente',
                    data: deleted,
                });
            } else {
                throw new Error('No se pudo eliminar el comentario');
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export default deleteCommentController;