export const notFoundError = (resourse) => {
    throw {
        httpStatus: 404,
        code: 'RESOURCE_NOT_FOUND',
        message: `El recurso requerido '${ resourse }' no se encuentra`
    }
}

export const userAllReadyRegistratedError = () => {
    throw {
        httpStatus: 409,// conflicto
        code: 'USER_ALREADY_REGISTERED',
        message: `El nombre de usuario ya se encuentra registrado`
    }
}

export const emailAllReadyRegistratedError = () => {
    throw {
        httpStatus: 409, // conflicto
        code: 'EMAIL_ALREADY_REGISTERED',
        message: `El email ya se encuentra registrado`
    }
}

export const invalidCredentialsError = () => {
    throw {
        httpStatus: 401, // no autorizado
        code: 'INVALID_CREDENTIALS',
        message: `Credenciales inválidas`
    }
}

export const sendMailError = () => {
    throw {
        httpStatus: 500, // no autorizado
        code: 'SEND_MAIL_FAILED',
        message: `Error al enviar email`
    }
}

export const pendignActivationError = () => {
    throw {
        httpStatus: 403, // pendiente de activar
        code: 'PENDING_ACTIVATION',
        message: `Usuario pendiente de activación. Verifique su cuenta antes de continuar`
    }
}

export const notAuthenticatedError = () => {
    throw {
        httpStatus: 401, // autenticacion
        code: 'NOT_AUTHENTICATED',
        message: 'Se esperaba un token por el header "Authorization" '
    }
}