import React, { useState,useEffect } from 'react'
import { List, Button , Tooltip } from 'antd';
import ModalDetailOrder from './ModalDetailOrder';

export default function ListOrder( {tab}) {
  const [modalDetail, setModalDetail] = useState(false);
    const data = [
        {
          title: 'Đơn hàng mã 1',
        },
        {
          title: 'Đơn hàng mã 2',
        },
        {
          title: 'Đơn hàng mã 3',
        },
    
      ];
    return(
        <>
<List
    itemLayout="vertical"
    size="large"
    dataSource={data}
    renderItem={item => (
      <List.Item
      extra={
        <div className='flex flex-col  bg-gray-100 h-full p-8 space-y-2'>
            {tab=='cho-xac-nhan' && <div className='text-red-700 font-medium text-base mb-4'>Chờ xác nhận</div>}
            {tab=='dang-giao' && <div className='text-red-700 font-medium text-base mb-4'>Vận chuyển</div>}
        
            {tab=='da-huy' && <div className='text-red-700 font-medium text-base mb-4'>Đã hủy</div>}
  
        <div className='text-base font-medium'> Tổng tiền: 20,000,000 đồng</div>
        {tab=='cho-xac-nhan' && <Button className='text-red-700 w-auto justify-end'>Hủy đơn hàng</Button>}
        {tab=='dang-giao' &&  <Tooltip title="Liên hệ chúng tôi để hủy đơn" placement="bottom">
        <Button disabled className='text-red-700 w-auto justify-end'>Hủy đơn hàng</Button>
          </Tooltip>}
        {tab=='da-thanh-toan' && <Button className='text-red-700 w-auto justify-end'>Đánh giá</Button>}
    </div>
      }
      >
        <List.Item.Meta
          title={<a className='text-xl' href="https://ant.design">{item.title}</a>}
          description={
              <div className='flex flex-col space-y-4'>
                     <img
          width={272}
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
        
       <Button onClick={() => setModalDetail(true)} className='w-full h-10 text-white bg-green-400 font-medium text-base'>Xem chi tiết đơn hàng</Button>
              </div>
         
          }
        />
     
      </List.Item>
    )}
    
  />
  <ModalDetailOrder modalDetail= {modalDetail} setModalDetail={setModalDetail} />
        </>
    )
}
