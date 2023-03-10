import ActionType from '../Constant/ActionType'

export const doGetSigninRequest = (payload:any):any => ({
    type : ActionType.LOGIN,
    payload
})

export const doGetSigninSuccess = (payload:any):any =>({
    type: ActionType.LOGIN_SUCCEES,
    payload
})

export const doMessageNotification = (message:any):any =>({
    type: ActionType.MESSAGE_NOTIFICATION,
    payload : message
})
