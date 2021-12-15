export const LoginStart = (userParams) => ({
    type: "START_LOGIN",
});
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})

export const LoginFailed = () => ({
    type: "LOGIN_FAILED",
})

export const LogOut = () => ({
    type: "LOGOUT",
})