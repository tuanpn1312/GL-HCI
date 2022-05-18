import React, { useState,useEffect } from 'react'
import { Tag, Table, Typography,Button,Spin,Input, message,Space,Popconfirm} from "antd";
import {DeleteOutlined ,PlusCircleOutlined } from "@ant-design/icons";
const { Title } = Typography;
import classNames from 'classnames';
const { Search } = Input;

import apiService from '../../../../utils/api/apiService';
import AddLaptop from './addLaptop';

export default function Laptops() {
    const [laptops, setLaptops] = useState([]);
    const [port, setPort] = useState([]);
    const [wifi, setWifi] = useState([]);
    const [operator, setOperator] = useState([]);
    const [webcam, setWebcam] = useState([]);
    const [isModalAdd, setIsModalAdd] = useState(false);
//get laptop
    const getLaptops= async () => {
        try {
            const response = await apiService.get('/laptop');
            setLaptops(response.data);
           
        } catch (error) {
            console.log(error);
        }
      }
      // get post
      const getPort= async () => {
        try {
            const response = await apiService.get('/utils/port');
            setPort(response.data);
           
        } catch (error) {
            console.log(error);
        }
      }
      const getWifi= async () => {
        try {
            const response = await apiService.get('/utils/wifi');
            setWifi(response.data);
           
        } catch (error) {
            console.log(error);
        }
      }
      const getWebcam= async () => {
        try {
            const response = await apiService.get('/utils/webcam');
            setWebcam(response.data);
           
        } catch (error) {
            console.log(error);
        }
      }
      // hệ điều hành
      const getOperator= async () => {
        try {
            const response = await apiService.get('/utils/operator');
            setOperator(response.data);
           
        } catch (error) {
            console.log(error);
        }
      }
    //modal add
    const showModalAdd= () => {
        setIsModalAdd(true);
      };
      
      const handleCancelAdd  = () => {
        setIsModalAdd(false);
      };
      //
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      useEffect(() => {
        getLaptops();
        getPort();
   
      }, [])
      const columns = [
        {
            title: 'Ảnh',
            dataIndex: 'image_detail',
            key: 'image_detail',
            render: img => <div className="flex items-center">
                <img width={120} src={img} alt="ảnh sản phẩm" />
            </div>,
        },
        // {
        //     title: 'Tên sản phẩm',
        //     dataIndex: 'product_id',
        //     key: 'product_id',
        //     render: (text) => <a>{text}</a>,
        // },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Lưu trữ',
            dataIndex: 'disk',
            key: 'disk',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'CPU',
            dataIndex: 'cpu',
            key: 'cpu',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'RAM',
            dataIndex: 'ram',
            key: 'ram',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'VGA',
            dataIndex: 'vga',
            key: 'vga',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Màn hình',
            dataIndex: 'monitor',
            key: 'monitor',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Cổng',
            dataIndex: 'communication',
            key: 'communication',
            render: (text) => <a>{text}</a>,
        },
     
        {
            title: 'Âm thanh',
            dataIndex: 'audio',
            key: 'audio',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Read_memory',
            dataIndex: 'read_memory',
            key: 'read_memory',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Lan',
            dataIndex: 'lan',
            key: 'lan',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Wifi',
            dataIndex: 'wifi',
            key: 'wifi',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Bluetooth',
            dataIndex: 'bluetooth',
            key: 'bluetooth',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Webcam',
            dataIndex: 'webcam',
            key: 'webcam',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Hệ điều hành',
            dataIndex: 'operator',
            key: 'operator',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Pin',
            dataIndex: 'pin',
            key: 'pin',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Cân nặng',
            dataIndex: 'weight',
            key: 'weight',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Loại',
            dataIndex: 'type',
            key: 'type',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Trạng thái',
            key: 'status',
            dataIndex: 'status',
            render: status => (
                <>
                 {status==="true" && <Tag color={'green' } >
                       Hoạt động
                    </Tag>}
                    {status==="false" && <Tag color={'volcano' } >
                    Tạm ngừng
                    </Tag>}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                   
                    { record.status==="true" && <Popconfirm
                        title={ `link "${record.link}" sẽ không hiển thị cho người dùng. Tạm dừng hoạt động?`}
                        onConfirm={() => updateProductStatus(record, record.status ="false")}
                        okText={'Tạm dừng'}
                        cancelText="Hủy"
                    >
                        <a className={classNames('hover:text-red-400')}>Tạm dừng</a>
                    </Popconfirm>
                      }
                       { record.status==="false" && <Popconfirm
                        title={ ` "${record.link}" sẽ được mở cửa?`}
                        onConfirm={() => updateProductStatus(record, record.status ="true")}
                        okText={'Hoạt động'}
                        cancelText="Hủy"
                    >
                        <a className={classNames('hover:text-green-400')}>Hoạt động</a>
                    </Popconfirm>
                      }
                 
                </Space>
            ),
                    },
            {
              title: '',
              key: 'delete',
              render: (text, record) => (
                  <Space size="middle">
                     
                    <Popconfirm
                          title={ `link "${record.link}" bạn chắc muốn xóa?`}
                          onConfirm={() => deleteProduct(record)}
                          okText={'Xóa'}
                          cancelText="Hủy"
                      >
                         <DeleteOutlined style={{color:"red"}} />
                      </Popconfirm>
                   
                   
                  </Space>
              ),
        }
      ];
    return(
        <div className=" bg-white rounded-lg hover:shadow-xl p-6 flex flex-col justify-center relative">
        <div className="text-center">
  
        <Title level={3} className="p-5" >Sản phẩm Laptop</Title>
        </div>
        <div className='flex justify-between'>
        <Search  placeholder="Tìm kiếm theo tên" style={{ width: 'auto' }} />
        <Button type="primary"  onClick={showModalAdd}  style={{width:"130px", marginBottom:"20px",}} >
          Thêm sản phẩm
        </Button>
        </div>
       
    <AddLaptop onFinishFailed={onFinishFailed} isModalAdd={isModalAdd} handleCancelAdd={handleCancelAdd}   />
    <Table
    onRow={(record, rowIndex) => {
      return {
          onClick: () => {
            // setShowModalEdit(true)
            // setProductDetail(record)
          }
      }
  }
  }
  
                  columns={columns} dataSource={laptops}
                  pagination={{ defaultPageSize: 6 }}
                  scroll={{ y: 500 }} />
    {/* <EditProduct deleteImage={deleteImage} handleChangeImage={handleChangeImage} showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} productDetail={productDetail} updateProducts={updateProducts} categories={categories} brands={brands}/> */}
  
          </div>
    )
}