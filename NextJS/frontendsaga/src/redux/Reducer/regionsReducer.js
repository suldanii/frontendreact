import ActionType from "../Constant/ActionType";

const initialState = {
    regions: []
};

//fungsi regionsReducers sebagai reducer yang digunakan untuk mengubah state aplikasi sesuai dengan action yang diterima
function regionsReducers(state = initialState, action){
    //menentukan tindakan yang akan diambil sesuai dengan action.type yang diterima
    switch (action.type){
    //jika action.type = GET_REGIONS, maka state.regions akan diupdate dengan data yang diterima dari server
    case ActionType.GET_REGIONS:
    return {...state};
    case ActionType.GET_REGION_SUCCEED:
    return {...state, regions:action.payload};
    case ActionType.ADD_REGIONS_FAILED:
    return {...state, regions:action.payload};
    //jika action.type = ADD_REGIONS, maka tidak ada tindakan yang dilakukan
    case ActionType.ADD_REGIONS:
    return {...state};
    case ActionType.ADD_REGIONS_SUCCEED:
    return {...state,regions: [...state.regions, action.payload]};
    //jika action.type = UPDATE_REGIONS, maka akan menjalankan fungsi applyUpdateRegions yang digunakan untuk mengubah data pada state.regions
    case ActionType.UPDATE_REGIONS:
    return {...state};
    case ActionType.UPDATE_REGIONS_SUCCEED:
    return applyUpdateRegions(state, action);
    case ActionType.UPDATE_REGIONS_FAILED:
    return applyUpdateRegions(state, action);
    //jika action.type = DEL_REGIONS, maka data pada state.regions akan di filter dan menghapus data yang memiliki id sama dengan payload.id yang diterima
    case ActionType.DEL_REGIONS:
    return {...state};
    case ActionType.DEL_REGIONS_SUCCEED:
    return {
    ...state,
    regions: state.regions.filter(regions=>regions.id !== action.payload.id)
    }
    //default akan mengembalikan state saat ini
    default:
    return {...state, regions:action.payload}
    }
    }
    
    //fungsi applyUpdateRegions digunakan untuk mengubah data pada state.regions
    const applyUpdateRegions = (state, action) =>{
    //mapping data pada state.regions dan mengecek jika data.regionId sama dengan action.payload.regionId maka data akan diupdate dengan data yang diterima dari action.payload
    return state.regions.map((regions) =>{
    if (regions.Id === action.payload.regionId){
    return {
    ...state,
    ...action.payload
    }
    }else{
    //jika tidak sama maka data tidak diubah
    return state
    }
    });
    }
    
    export default regionsReducers