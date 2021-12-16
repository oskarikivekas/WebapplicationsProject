/* Actions are triggered by functions like login 
   Their job is to pass payload to reducer
*/

export const LoginStart = (userParams) => ({
    type: "START_LOGIN",
});
export const LoginSuccess = (data) => ({
    type: "LOGIN_SUCCESS",
    payload: data,
})

export const LoginFailed = () => ({
    type: "LOGIN_FAILED",
})

export const LogOut = () => ({
    type: "LOGOUT",
})