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
        INSERT INTO postlikes (value, postId, userId)
        VALUES (?, ?, ?)
    `,
    [value, postId, userId]
    );

    const [likesAvg] = await pool.query(
    `
        SELECT AVG(value) AS avg FROM postlikes WHERE postId = ${postId}
    `
    );

    return Number(likesAvg[0].avg);
}

export default insertLikeModel;