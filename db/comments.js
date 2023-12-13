// import { generateError } from '../helpers';
import { getConnection } from '../src/db/getPool';

const addCommentToPost = async (postId, userId) => {
    let connection;

    try {
        connection = await getConnection();

        // Añadir un nuevo comentario a la tabla 'comments'
        await connection.query(
            `
                INSERT INTO comments (user_id, post_id)
                VALUES (?, ?)
            `,
            [userId, postId]
        );

        // Incrementar los comentarios en la tabla 'posts'
        await connection.query(
            `
                UPDATE posts
                SET comments = comments + 1
                WHERE id = ?
            `,
            [postId]
        );
        
        return;
    } finally {
        if (connection) connection.release();
    }
};

const removeCommentFromPost = async (postId, userId) => {
    let connection;

    try { 
        connection = await getConnection();

        // Eliminar el comentario de la tabla 'comments'
        await connection.query(
            `
                DELETE FROM comments
                WHERE user_id = ? AND post_id = ?
            `,
        [userId, postId]
        );

        // Decrementar los comentarios en la tabla 'posts'
        await connection.query(
            `
                UPDATE posts 
                SET comments = CASE WHEN comments > 0 THEN comments - 1 ELSE 0 END
                WHERE id = ?
            `,
            [postId]
        );

        return;
    } finally {
        if (connection) connection.release();
    }
};

export {
    addCommentToPost,
    removeCommentFromPost
};