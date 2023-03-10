import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { doRegionsCreate } from '../../Redux/Actions/reduceActions';
import { Button } from 'antd';


const AddRegionsRedux = ()=>{
    const router = useRouter()

    // tion ke store redux
    const dispatch = useDispatch()

    // tate dari field input
    const [dataregions, setregions]= useState({
        regionId: 0,
        regionName : '',
        file: null,
    });
    
    
    const evenHandler = (field) => event =>{
        setregions({...dataregions, [field]: event.target.value || event.target.files[0]})
    };
    
 
    const addData = (e) =>{
        e.preventDefault();
        // e dengan dataregions sebagai payload
        dispatch(doRegionsCreate({...dataregions, file: dataregions.file}))
        router.push('/regions')
    }

    return(
        <main id="main" class="main">
            <br></br>
        <div class="container">
            <form enctype='multipart/form-data'>
                <div class="mb-3">
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center ">Regions Name</label><br/>
                    <input value={dataregions.regionName} 
                        onChange={evenHandler("regionName")}
                        type="text" id="small-input" 
                        class="text-center block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>                
                </div>
                <br/>
                <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center ">Gambar</label><br/>
                <input value={dataregions.regionName} 
                        onChange={evenHandler("file")}
                        type="file" id="small-input" 
                        class="text-center block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <center> 
                        <Button onClick={addData} >Submit</Button>
                    </center>
            </form>
        </div>
        </main>
    )
}

export default AddRegionsRedux
