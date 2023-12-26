import getPool from "../../db/getPool.js";

const getCommentCountModel = async (postId) => {
    try {
        const pool = await getPool();
        // Consultar el conteo de comentarios en la tabla 'posts'
        const [results] = await pool.execute(
            `
                SELECT commentCount FROM posts WHERE id = ?
            `,
            [postId]
        );

        return results[0]?.commentCount || 0;
  
    } catch (error) {
            console.log(error);
    }

};

export default getCommentCountModel;