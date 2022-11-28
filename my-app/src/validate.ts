const ENTER_EMAIL = 'Введите почту';
const WRONG_EMAIL_LANGUAGE = 'Почта должна содержать только латинские буквы';
const WRONG_EMAIL = 'Почта должна содержать специальный символ @ и домен';
const ENTER_PASSWORD = 'Введите пароль';
const WRONG_PASSWORD_LANGUAGE =
    'Пароль должен состоять только из цифр и латинских букв';
const WRONG_PASSWORD_LENGTH =
    'Пароль должен содержать не менее 8 символов и не более 30 символов';
const NOT_ERROR = '';
const _emailLanguageRegExp = /^[A-z._@\s\-\d]+$/;
const _emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const _passwordLanguageRegExp = /^[A-z\d]+$/;


export const validateEmail = (email: string): string => {
    if (!email) {
        return ENTER_EMAIL;
    }

    if (!_emailLanguageRegExp.test(email)) {
        return WRONG_EMAIL_LANGUAGE;
    }

    if (!_emailRegExp.test(email)) {
        return WRONG_EMAIL;
    }

    return NOT_ERROR;
}

export const validatePassword = (password: string): string =>{
    if (!password) {
        return ENTER_PASSWORD;
    }

    if (!_passwordLanguageRegExp.test(password)) {
        return WRONG_PASSWORD_LANGUAGE;
    }

    if (password.length < 8) {
        return WRONG_PASSWORD_LENGTH;
    }

    if (password.length > 30) {
        return WRONG_PASSWORD_LENGTH;
    }

    return NOT_ERROR;
}
//Через юс стэйт достаем текст ошибки и подтсавляем в инпут. Лучше на он блюр а не хэндл
