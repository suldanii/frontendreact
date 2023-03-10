import ActionType from '../Constant/ActionType'

const getFromLocalStorage = (key:any):any => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    return sessionStorage.getItem(key)
}

// const INIT_STATE = {
//     UserProfile: getFromLocalStorage('profile')?JSON.parse(sessionStorage.getItem('profile')),
//     UserSignUp:{},
//     message: ''
// }

const UsrReducer = (state :any, action:any) => {
    switch (action.type) {
        case ActionType.LOGIN:
            return state
        case ActionType.LOGIN_SUCCEES:
            return GetSigninSuccess(state, action)
        // case ActionType.ADD_SIGNUP_REQUEST:
        //     return state
        // case ActionType.ADD_SIGNUP_SUCCESS:
        //     return AddSignupSuccess(state, action)
        // case ActionType.POST_SIGNOUT_REQUEST:
        //     return state
        // case ActionType.POST_SIGNOUT_SUCCESS:
        //     return PushSignoutSuccess(state, action)
        case ActionType.MESSAGE_NOTIFICATION:
            return ShowMessage(state,action)
        default:
            return state
    }
}

const GetSigninSuccess = (state:any, action:any):any => {
    return {
        ...state,
        UserProfile: action.payload ,
        message: ''
    }
}

const PushSignoutSuccess = (state:any, action:any):any => {
    return {
        ...state,
        UserProfile: {},
        message: "",
    }
}

const AddSignupSuccess = (state:any, action:any):any => {

    return {
        ...state,
        UserSignUp: action.payload,
    }
}

const ShowMessage = (state:any, action:any):any =>{
    const {payload} = action
    return{
        ...state,
        message: payload.message
    }
}

export default UsrReducer