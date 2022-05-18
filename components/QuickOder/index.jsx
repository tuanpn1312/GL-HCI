import React, { useState,useEffect } from 'react'
import { Steps,  Typography} from "antd";
import {  ShoppingCartOutlined,FileTextOutlined,CheckCircleOutlined   } from '@ant-design/icons';
import DefaultLayout from '../../layouts/Default';
const { Text, Title, Link } = Typography;
const { Step } = Steps;

import numberFormat from '../../utils/modules/numberFormat';
import apiService from '../../utils/api/apiService';
import Information from './Information';
import Total from './Total';

export default function QuickOder() {
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
      
   
    return(
        <DefaultLayout>
            <div className='flex flex-col items-center'>
            <Steps className='mt-7 mx-10 w-1/3' size="small" >
    <Step status="wait" title="Giỏ hàng" icon={<ShoppingCartOutlined/>} />
    <Step status="process" title="Chi tiết thanh toán"icon={<FileTextOutlined />} />
    <Step status="wait" title="Đặt hàng thành công" icon={<CheckCircleOutlined />} />
  </Steps>

  <div className="flex bg-white rounded-lg hover:shadow-xl m-8 w-11/12">
        
        {/* <Table className='w-2/3 m-6'
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
            /> */}
            <Information />
  
  
        <div className="bg-gray-100 w-1/2 flex flex-col text-center space-y-6 px-6">
                {/* <Title level={3}>Tổng: 20,000,000</Title>
              
                <div>
                    <Button   className=" w-9/12 h-10 ">
                        Checkout
                    </Button>
                </div>
                <p>Giao hàng và thuế được tính khi thanh toán</p> */}
                <Total products={products}/>

            </div>
    
      </div>
            </div>
            
           
          </DefaultLayout>
    )
}