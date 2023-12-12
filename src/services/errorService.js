export const notFoundError = (resource) => {
    throw {
        httpStatus: 404, // conflicto
        code: 'RESOURCE_NOT_FOUND',
        message: `El recurso requerido '${resource}' no se encuentra`
    };
};

export const userAllReadyRegistratedError = () => {
    throw {
        httpStatus: 409, // conflicto
        code: 'USER_ALREADY_REGISTRATED',
        message: 'El nombre de usuario ya se encuentra registrado'
    };
};

export const emailAllReadyRegistratedError = () => {
    throw {
        httpStatus: 409, // conflicto
        code: 'EMAIL_ALREADY_REGISTRATED',
        message: 'El email ya se encuentra registrado'
    };
};

export const invalidCredentialsError = () => {
    throw {
        httpStatus: 401, // no autorizado
        code: 'INVALID_CREDENTIALS',
        message: 'Credenciales inválidas'
    };
};

export const sendMailError = () => {
    throw {
        httpStatus: 401, // no autorizado
        code: 'SEND_MAIL_FAILED',
        message: 'Error al enviar email'
    };
};

export const pendingActivationError = () => {
    throw {
        httpStatus: 403, // pendiente de activar
        code: 'SEND_MAIL_FAILED',
        message: 'Usuario pendiente de activación. Verifica tu cuenta antes de continuar'
    };
};

export const notAuthenticatedError = () => {
    throw {
        httpStatus: 401, // autenticación
        code: 'NOT_AUTHENTICATED',
        message: 'Se esperaba un token por el header "Authorization"'
    };
};
