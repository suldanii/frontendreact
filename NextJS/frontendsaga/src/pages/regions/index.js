import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { doDeleteRegions, doRegionsRequest } from '../../Redux/Actions/reduceActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import {useRouter} from 'next/router';
import { Table, Space, Button } from 'antd';


const RegionRedux = () => {
    const router = useRouter()

    let regions = useSelector(state => state.regionsReducer.regions);

    const dispatch = useDispatch();

    useEffect(()=>{ 
        dispatch(doRegionsRequest());
    });


    const editData = (id) => {
        router.push({
            pathname:(`/regions/edit`),
            query: {id}
        })
        
    }

    const deleteData = (id) => {
        dispatch(doDeleteRegions(id))
    }
    
    const columns = [
        {
          title: 'Region Id',
          dataIndex: 'regionId',
          key: 'regionId',
          sorter: (a, b) => a.regionId - b.regionId,
        },
        {
          title: 'Region Name',
          dataIndex: 'regionName',
          key: 'regionName',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Space size="middle">
                <button className='btn btn-sm btn-primary mr-1' onClick={()=>editData(record.regionId)}> <FontAwesomeIcon icon={faEdit} />Edit</button>
                <button className='btn btn-sm btn-primary mr-2' onClick={()=>deleteData(record.regionId)}> <FontAwesomeIcon icon={faTrash} />Delete</button>
              </Space>
            ),
          },
          {
            title: 'File',
            dataIndex: 'file',
            key : 'image',
            render: (image) => <img src={`data:image/jpeg;base64,${image}`} />,
          }
      ]
    
    

    return (
        <div >
            <h1 className='text-4xl font-extrabold dark:text-white'>DataRegion</h1>
            <main id='main' class="main" > 
                <br/>
                <div class="pagetitle">
                    <Link href='/regions/add'><Button > <FontAwesomeIcon icon={faPlus}/>Tambah</Button></Link>
                </div>
                <br/>
                <div>
                    <Table dataSource={regions} columns={columns} />
                </div>
                </main>
                </div>
            )
        }

export default RegionRedux                    