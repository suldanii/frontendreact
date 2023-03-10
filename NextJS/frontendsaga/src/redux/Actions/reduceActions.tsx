import ActionType from "../Constant/ActionType";

export const doRegionsRequest=()=>{
    return {
        type: ActionType.GET_REGIONS
    }
}

export const doRegionsRequestSucceed=(payload:any)=>{
    return {
        type: ActionType.GET_REGION_SUCCEED,
        payload
    }
}

export const doRegionsRequestFailed=(payload:any)=>{
    return {
        type: ActionType.GET_REGION_SUCCEED,
        payload
    }
}

export const doRegionsIdRequest=()=>{
    return {
        type: ActionType.GET_REGIONS_ID
    }
}

export const doRegionsIdRequestSucceed=(payload:any)=>{
    return {
        type: ActionType.GET_REGIONS_ID_SUCCEES,
        payload
    }
}

export const doRegionsIdRequestFailed=(payload:any)=>{
    return {
        type: ActionType.GET_REGIONS_ID_FAILED,
        payload
    }
}

export const doRegionsCreate=(payload:any)=>{
    return {
        type: ActionType.ADD_REGIONS,
        payload
    }

}

export const doAddDRegionsSucceed=(payload:any)=>{
    return {
        type: ActionType.ADD_REGIONS_SUCCEED,
        payload
    }

}

export const doAddDRegionsFailed=(payload:any)=>{
    return {
        type: ActionType.ADD_REGIONS_FAILED,
        payload
    }

}


export const doUpdateRegions=(payload:any)=>{
    return {
        type: ActionType.UPDATE_REGIONS,
        payload
    }
}


export const doUpdateRegionsSucceed=(payload:any)=>{
    return {
        type: ActionType.UPDATE_REGIONS_SUCCEED,
        payload
    }
}


export const doUpdateRegionsFailed=(payload:any)=>{
    return {
        type: ActionType.UPDATE_REGIONS_FAILED,
        payload
    }
}


export const doDeleteRegions=(payload:any)=>{
    return {
        type: ActionType.DEL_REGIONS,
        payload
    }
}

export const doDeleteRegionsSucceed=(payload:any)=>{
    return {
        type: ActionType.DEL_REGIONS_SUCCEED,
        payload
    }
}

export const doDeleteRegionsFailed=(payload:any)=>{
    return {
        type: ActionType.DEL_REGIONS_FAILED,
        payload
    }
}

// export const doLogin=(payload:any)=>{
//     return {
//         type: ActionType.LOGIN,
//         payload
//     }
// }

// export const doLoginSuccees=(payload:any)=>{
//     return {
//         type: ActionType.LOGIN_SUCCEES,
//         payload
//     }
// }

// export const doLoginFailed=(payload:any)=>{
//     return {
//         type: ActionType.LOGIN_FAILED,
//         payload
//     }
// }