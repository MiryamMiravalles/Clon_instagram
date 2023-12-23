import getPool from '../../db/getPool.js';

const insertPhotoModel = async (photoName, postId) => {
    const pool = await getPool();

    const [result] = await pool.query(
        `
            INSERT INTO postPhotos (name, postId)
            VALUES (?, ?)
        `,
        [photoName, postId]
    );

    const { insertId } = result;

    return insertId;
}

export default insertPhotoModel;
