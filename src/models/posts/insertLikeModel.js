import getPool from "../../db/getPool.js";
import { likeAlreadyExistsError } from "../../services/errorService.js";

const insertLikeModel = async (value, postId, userId) => {
    const pool = await getPool();

    // Comprobar que si existe un like previo por parte del usuario para ese post, no pueda darle de nuevo
    const [likes] = await pool.query(
    `
        SELECT id FROM postlikes
        WHERE userId = ? AND postId = ?
    `,
    [userId, postId]
    );

    if (likes.length) likeAlreadyExistsError();

    // Insertamos el like en postlikes
    await pool.query(
    `
        INSERT INTO postlikes (postId, userId, value)
        VALUES (?, ?, ?)
    `,
    [postId, userId, value]
    );

    // Obtenemos la calificación promedio actualizada de likes del post
    const [updatedLikesAvg] = await pool.query(
    `
        SELECT AVG(value) AS likesAvg FROM postlikes
        WHERE postId = ?
    `,
    [postId]
    );
  
    // Obtén el número actual de likes para el post especificado
    const [results] = await pool.query(
        `
            SELECT likesAvg
            FROM posts
            WHERE id = ?
        `,
        [postId]
    );

    // Calcular el nuevo promedio de likes
    const newLikesAvg = results[0].likesAvg + 1;

    // Actualiza el contador de likes para el post especificado
    await pool.query(
        `
            UPDATE posts
            SET likesAvg = ?
            WHERE id = ?
        `,
        [newLikesAvg, postId]
    );
};

export default insertLikeModel;