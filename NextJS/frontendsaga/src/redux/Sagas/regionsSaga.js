import {call, put} from 'redux-saga/effects'
import ReduceService from "../Service/reduceService";
import { doAddDRegionsFailed, doAddDRegionsSucceed, doDeleteRegionsFailed, doDeleteRegionsSucceed, doRegionsRequestFailed, doRegionsRequestSucceed, doUpdateRegionsFailed, doUpdateRegionsSucceed } from '../Actions/reduceActions';



function* handleRegions(){
    try {
        const result = yield call(ReduceService.getAll)
        yield put(doRegionsRequestSucceed(result.data))
    }
    catch (error){
        yield put(doRegionsRequestFailed(error))
    }
}



function* handleAddRegions(action){
    try{
        const result = yield call(ReduceService.create,action.payload)
        yield put (doAddDRegionsSucceed(result.data))
    }
    catch (error){
        yield put(doAddDRegionsFailed(error))
    }
}

function* handleUpdateRegions(action){
    try{
        const result = yield call(ReduceService.update, action.payload)
        yield put(doUpdateRegionsSucceed(result.data))
    }
    catch(error){
        yield put (doUpdateRegionsFailed(error))
    }
}

function* handleDelRegions(action){
    try{
        const result = yield call(ReduceService.remove, action.payload)
        yield put (doDeleteRegionsSucceed(action.payload))
    }
    catch(error){
        yield put (doDeleteRegionsFailed(error))
    }
}

export{handleRegions,handleAddRegions,handleDelRegions,handleUpdateRegions}