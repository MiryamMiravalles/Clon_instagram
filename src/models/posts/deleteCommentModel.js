import getPool from "../../db/getPool.js";

const deleteCommentModel = async (userId, postId, commentId) => {

    const pool = await getPool();

    try {
        // Check if the userId, postId and commentId exist
        const [userRows] = await pool.query(
            `SELECT id FROM users WHERE id = ?`,
            [userId]
        );
        const [postRows] = await pool.query(
            `SELECT id FROM posts WHERE id = ?`,
            [postId]
        );
        const [commentRows] = await pool.query(
            `SELECT id FROM postcomments WHERE id = ?`,
            [commentId]
        );

   

        // Check if the user is the owner of the comment
        const [commentOwnerRows] = await pool.query(
            `SELECT id FROM postcomments WHERE id = ? AND userId = ?`,
            [commentId, userId]
        );


        // Delete the comment
        const [deletedRows] = await pool.query(
            `DELETE FROM postcomments WHERE id = ?`,
            [commentId]
        );
        
        return true;
    } catch (error) {
        console.log(error);
        throw error;
    };
};

export default deleteCommentModel;