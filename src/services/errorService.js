export const userAllReadyRegistratedError = () => {
    throw {
        httpStatus: 409, // conflicto
        code: 'USER_ALREADY_REGISTRATED',
        message: 'El nombre de usuario ya se encuentra registrado'
    }
}

export const emailAllReadyRegistratedError = () => {
    throw {
        httpStatus: 409, // conflicto
        code: 'EMAIL_ALREADY_REGISTRATED',
        message: 'El email ya se encuentra registrado'
    }
}