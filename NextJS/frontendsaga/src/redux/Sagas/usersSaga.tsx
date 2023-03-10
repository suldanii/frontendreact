import {call,put} from 'redux-saga/effects'
import ApiLogin from '../Service/ApiLogin'
import { doGetSigninSuccess, doMessageNotification } from '../Actions/reducerActionlogin';

function* handlerUserSignin(action:any):any{
    try{
        const result = yield call(ApiLogin.login,action.payload);
        if (Object.keys(result.data).length === 0){
            yield put(doMessageNotification({message : 'user or password not match, try again'}));
        }
        else{
            sessionStorage.setItem('token',result.data.token)
            yield put(doGetSigninSuccess(result.data))
            console.log(result.data);
            
        }  
    }catch (error) {
        yield put(doMessageNotification({message : 'user or password not match, try again'}));
    }
}

export {handlerUserSignin}