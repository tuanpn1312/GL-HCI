import React, { useState,useEffect } from 'react'
import { Divider , Table, Input,Button, Radio} from "antd";

import numberFormat from '../../utils/modules/numberFormat';

export default function Total({products}) {

    const columns = [
        {
           
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
            
            dataIndex: 'Số lượng',
            key: 'soluong',
            render: (text) => <>1</>,
        },
        {
    
            dataIndex: 'price_now',
            key: 'price_now',
            render: price => <span>{numberFormat(price)} đồng</span>,
        },
     

      ];

    return(
        <>
        <Table  size="small" 
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
              scroll={{ y: 300 }} 
            />
            <Divider />
            <div className='flex justify-between my-5'>
            <div className='text-base font-medium' >Phương thức thanh toán</div>
            <Radio optionType="button">Thanh toán khi nhận hàng</Radio>
            </div>
              <Divider />
              <div className='flex justify-between my-5 space-x-4'>
            <Input  size="large" placeholder='Mã giảm giá' />
            <Button size="large" className='text-base text-white bg-pink-700 hover:text-pink-700 ' >Áp dụng</Button>
            </div>
              <Divider />
            <div className='flex justify-between'>
            <div className='text-sm ' >Tổng phụ</div>
            <div className='text-sm'>20,000,000</div>
            </div>
            <div className='flex justify-between'>
            <div className='text-sm' >Tiền ship</div>
            <div className='text-sm'>free</div>
            </div>
            <Divider />
            <div className='flex justify-between my-5'>
            <div className=' ' >Tổng</div>
            <div className='font-semibold text-xl'>20,000,000</div>
            </div>
        </>
    )

}