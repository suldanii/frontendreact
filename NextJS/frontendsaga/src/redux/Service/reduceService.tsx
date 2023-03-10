// axios digunakan untuk melakukan request HTTP, sudah di import dari file http-common.
import axios from "../../Config/http-common";

// ReduceService adalah object yang berisi fungsi-fungsi untuk melakukan request ke API.
// Fungsi-fungsi ini digunakan di dalam action creator untuk mengambil, menambah, mengubah, dan menghapus data dari API.

// getAll() digunakan untuk mendapatkan semua data regions dari API
const getAll = async() =>{
    try{
        const result = await axios.get("/regions");
        return result
    }catch(error:any){
        return  error.message
    }
    }
    
    // get(id) digunakan untuk mendapatkan data regions dengan id tertentu dari API
    const getid = async (id:number) =>{
    try{
        const result = await axios.get(`/regions/${id}`);
        return result
    }catch(error:any){
        return  error.message
    }
    }
    
    // create(data) digunakan untuk menambah data regions baru ke API
    const create = async (data:any) =>{
    try{
        const result = await axios.post("/regions",data)
        return result
    }catch(error:any){
        return  error.message
    }
    }
    
    // update(id, data) digunakan untuk mengubah data regions dengan id tertentu di API
    const update =async(data:any)=>{
        const id = parseInt(data.regionId)
        try{
            const result = await axios.put(`/regions/${id}`, data)
            console.log(result)
            return result
        }catch(error:any){
            return  error.message
        }

    }
    
    // remove(id) digunakan untuk menghapus data regions dengan id tertentu dari API
    const remove =async (id:number) => {
        try{
            const result = await axios.delete(`/regions/${id}`)
            return result
        }catch(error:any){
            return  error.message
        }
       
    }
    
    // object ReduceService di export agar dapat digunakan di luar file ini
    const ReduceService = {
    getAll,
    getid,
    create,
    update,
    remove
    }
    
    export default ReduceService;