import getPool from '../../db/getPool.js';

const insertPostModel = async (text, image, userId) => {
    const pool = await getPool();

    const [result] = await pool.query(
        `
            INSERT INTO posts (text, userId)
            VALUE (?,?)
        `,
        [text, userId]
    );
    
    console.log(result);

    const { insertId } = result;

    return insertId;
}

export default insertPostModel;