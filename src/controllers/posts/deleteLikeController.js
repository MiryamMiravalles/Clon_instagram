import deleteLikeModel from "../../models/posts/deleteLikeModel.js";

const deleteLikeController = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const postId = req.params.postId;
        const likeId = req.params.likeId;

        const deletedLike = await deleteLikeModel(userId, postId, likeId);

        if (!deletedLike) {
            return res.status(404).send({
                status: "error",
                message: "No like found with the provided parameters",
            });
        }

        res.send({
            status: "ok",
            message: 'Like eliminado correctamente',
            data: { deletedLike },
        });
    } catch (error) {
        return next(error);
    }
};

export default deleteLikeController;