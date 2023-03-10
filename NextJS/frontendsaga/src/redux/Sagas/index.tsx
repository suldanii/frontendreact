import { takeEvery, all } from "redux-saga/effects";
import ActionType from "../Constant/ActionType";
import { handleAddRegions, handleDelRegions, handleRegions, handleUpdateRegions } from "./regionsSaga";
import { handlerUserSignin } from "./usersSaga";

function* watchAll(){
    yield all([
        takeEvery(ActionType.GET_REGIONS,handleRegions),
        takeEvery(ActionType.ADD_REGIONS,handleAddRegions),
        takeEvery(ActionType.UPDATE_REGIONS,handleUpdateRegions),
        takeEvery(ActionType.DEL_REGIONS,handleDelRegions),
        takeEvery(ActionType.LOGIN,handlerUserSignin)
    ])
}

export default watchAll;