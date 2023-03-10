import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import ReduceService from "../../Redux/Service/reduceService";
import { doUpdateRegions } from "../../Redux/Actions/reduceActions";
import { Button } from "antd";
import Head from "next/head";

const EditRegionsRedux = () => {
const router = useRouter();
const { id } = router.query || {};
const dispatch = useDispatch();

const [dataregions, setregions] = useState({
    regionId: 0,
    regionName: '',
});

useEffect(() => {
    ReduceService.getid(id)
        .then((res) => {
            setregions({
                ...dataregions,
                regionId: res.data.regionId,
                regionName: res.data.regionName,
            });
        })
        .catch((error) => alert(error));
},[]);

const eventHendler = (nama) => (event) => {
    setregions({ ...dataregions, [nama]: event.target.value });
};

const updateContent = (e) => {
    e.preventDefault();
    dispatch(doUpdateRegions(dataregions));
    router.push("/regions");
};

return (
<>
    <Head>
        <title>
        Edit Region
        </title>
    </Head>
    <main id="main" class="main">
        <div class="container">
            <form>
                <br/>
                <div class="mb-3">
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center ">Regions Name</label><br/>
                <center>
                <input value={dataregions.regionName} 
                        onChange={eventHendler("regionName")}
                        type="text" id="small-input" 
                        class="text-center block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </center>
                </div>
                <br/>
                <div>
                    <center> 
                        <Button onClick={updateContent} >Submit</Button>
                    </center>

                </div>
            </form>
        </div>
    </main>
</>
)

}
export default EditRegionsRedux;