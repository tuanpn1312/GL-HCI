import React, { useState,useEffect } from 'react'
import { Modal,Table,Divider } from 'antd';
import numberFormat from '../../utils/modules/numberFormat';

export default function ModalDetailOrder( {modalDetail,setModalDetail}) {


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
            render: (text) => <span>1</span>,
        },
       

      ];


    return(
        <Modal
        title="Chi tiết đơn hàng"
        centered
        footer={null}
        visible={modalDetail}
        onOk={() => setModalDetail(false)}
        onCancel={() => setModalDetail(false)}
        width={1000}
      >
          <div className='bg-gray-100 p-4'>
          <p className='text-base font-medium'>Địa chỉ nhận hàng</p>
          <p>Tên:</p>
        <p>Sdt</p>
        <p>Địa chỉ:</p>
        <Divider/>
        <p className=' '>Mã đơn hàng:</p>
        <p>Thời gian đặt:</p>
          </div>
          <Table className='my-4'
            onRow={(record, rowIndex) => {
            return {
            onClick: () => {
            // setShowModalEdit(true)
            // setProductDetail(record)
                    }
                }
            }
            }
              columns={columns} 
            //   dataSource={products}
              pagination={{ defaultPageSize: 6 }}
              scroll={{ y: 500 }} 
            />
         
            <div className='flex justify-between px-4 py-2 bg-gray-100'>
            <p className='text-lg font-medium'>Thành tiền:</p>
            <p className='text-lg font-medium'>20,000,000 đồng</p>
            </div>
        
           
            
      </Modal>
    )
}