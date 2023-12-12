import randomstring from "randomstring";
import insertUserModel from '../../models/users/insertUserModel.js';

const newUserController = async (req,res,next) => {
    try {

        const {username, email, password} = req.body;

        const registrationCode = randomstring.generate(20);

        await insertUserModel(username, email, password, registrationCode);

        res.send({
            status: 'ok',
            message: 'Usuario registrado correctamente. Verifica la bandeja de tu email para activar tu cuenta'
        });

    } catch (error) {
        next(error);
    }
};

export default newUserController;
