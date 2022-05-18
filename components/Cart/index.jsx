import React, { useState,useEffect } from 'react'
import { Steps, Table, Typography,Button ,Row, Col,InputNumber, message,Space,Popconfirm} from "antd";
import {  CloseOutlined,ShoppingCartOutlined,FileTextOutlined,CheckCircleOutlined   } from '@ant-design/icons';
import  Router  from 'next/router';
import DefaultLayout from '../../layouts/Default';
const { Text, Title, Link } = Typography;
const { Step } = Steps;


import numberFormat from '../../utils/modules/numberFormat';
import apiService from '../../utils/api/apiService';

export default function Cart() {
    const [products, setProducts] = useState([]);

    const key = "fetching";

    const getProducts= async () => {
        try {
            const response = await apiService.get('/products');
            setProducts(response.data);
           
        } catch (error) {
            console.log(error);
        }
      }
      useEffect(() => {
        getProducts();
 
      }, [])
      const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'image',
            key: 'image',
            render: img => <div className="flex items-center">
                <img width={120} src={img} alt="ảnh sản phẩm" />
            </div>,
        },
        {
        
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
    
    
 
        {
            title: 'Giá hiện tại',
            dataIndex: 'price_now',
            key: 'price_now',
            render: price => <span>{numberFormat(price)} đồng</span>,
        },
        {
            title: 'Số lượng',
            dataIndex: 'Số lượng',
            key: 'soluong',
            render: (text) => <InputNumber min={1} defaultValue={1}/>,
        },
        {
            title: '',
            key: 'delete',
            render: (text, record) => (
                <Space size="middle">
                   
                  <Popconfirm
                        title={ `link "${record.link}" bạn chắc muốn xóa?`}
                        // onConfirm={() => deleteBanner(record)}
                        okText={'Xóa'}
                        cancelText="Hủy"
                    >
                       <CloseOutlined style={{color:"red"}} />
                    </Popconfirm>
                 
                 
                </Space>
            ),
      }

      ];

   
    return(
        <DefaultLayout>
            <div className='flex flex-col items-center'>
            <Steps className='mt-7 mx-10 w-1/3' size="small" >
    <Step status="process" title="Giỏ hàng" icon={<ShoppingCartOutlined/>} />
    <Step status="wait" title="Chi tiết thanh toán"icon={<FileTextOutlined />} />
    <Step status="wait" title="Đặt hàng thành công" icon={<CheckCircleOutlined />} />
  </Steps>

  <div className="flex bg-white rounded-lg hover:shadow-xl m-8">
        
        <Table className='w-2/3 m-6'
            onRow={(record, rowIndex) => {
            return {
            onClick: () => {
            // setShowModalEdit(true)
            // setProductDetail(record)
                    }
                }
            }
            }
              columns={columns} dataSource={products}
              pagination={{ defaultPageSize: 6 }}
              scroll={{ y: 500 }} 
            />
  
  
        <div className="bg-gray-100 w-1/3 flex flex-col text-center space-y-6 py-20 px-4">
                <Title level={3}>Tổng: 20,000,000</Title>
              
                <div>
                    <Button onClick={() => Router.push('/quickoder')}  className=" w-9/12 h-10 ">
                        Checkout
                    </Button>
                </div>
                <p>Giao hàng và thuế được tính khi thanh toán</p>

            </div>
    
      </div>
            </div>
            
           
          </DefaultLayout>
    )
}