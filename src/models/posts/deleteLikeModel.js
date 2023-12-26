// deleteLikeModel.js

import getPool from "../../db/getPool.js";

const deleteLikeModel = async (userId, postId, likeId) => {
    const pool = await getPool();
    try {
        const [result] = await pool.query(
            `
                SELECT id FROM postlikes WHERE userId = ? AND postId = ? AND id = ?
            `,
            [userId, postId, likeId]
        );

        if (!result.length) {
            return null;
        }

        await pool.query(
            `
                DELETE FROM postlikes WHERE userId = ? AND postId = ? AND id = ?
            `,
            [userId, postId, likeId]
        );

        return result[0];
    } catch (error) {
        throw error;
    }
};

export default deleteLikeModel;