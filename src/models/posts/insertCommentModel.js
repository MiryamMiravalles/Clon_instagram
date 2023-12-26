import getPool from "../../db/getPool.js";

const insertCommentModel = async (comment, userId, postId) => {

    try {
        const pool = await getPool();
        // Insertar el comentario en la tabla 'comments' sin verificar existencia previa
        await pool.execute(
            `
                INSERT INTO postcomments (\`comment\`, userId, postId) 
                VALUES (?, ?, ?)
            `,
            [comment, userId, postId]
        );

        // Incrementar el conteo de comentarios en la tabla 'posts'
        await pool.execute(
            `
                UPDATE posts SET commentCount = commentCount + 1 WHERE id = ?
            `,
            [postId]
        );

        return true;
  
    } catch (error) {
            console.log(error);
    }
};

export default insertCommentModel;
