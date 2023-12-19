import getPool from "../../db/getPool.js";
import sendMailUtil from "../../util/sendMailUtil.js";

const updateRecoverPassModel = async (email, recoverPassCode) => {
    const pool = await getPool();

    await pool.query(
        `
            UPDATE users
            SET recoverPassCode = ?
            WHERE email = ?
        `,
        [recoverPassCode, email]
    );

    const subject = 'Recuperación de contraseña de InstaHAB';

    const body = 
        `
            Se ha solicitado la recuperación de la contraseña de InstaHAB de esta cuenta.
            
            Para crear una nueva contraseña utiliza el siguiente código de recuperación: ${recoverPassCode}

            Si no has sido tu, ignora este mail.
        `;

    await sendMailUtil(email, subject, body);

};

export default updateRecoverPassModel;